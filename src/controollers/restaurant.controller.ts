import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, {HttpCode, Message } from "../libs/types/Errors";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
       console.log("goHome");
       res.render("home");
       //send | json | redirect | end | end
    } catch (err) {
       console.log("Error, goHome:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
      console.log("Signup Page");
      res.render("signup");
    } catch (err) {
       console.log("Error, getSignup:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
      console.log("Login Page");
      res.render("login");
    } catch (err) {
       console.log("Error, getLogin:", err);
    }
};


restaurantController.processSignup = async (
   req: AdminRequest, 
   res: Response
) => {
   try {
     console.log("processSignup");
     const file = req.file;
     if(!file)
       throw new Errors(HttpCode.BAD_REQUEST,Message.SOMETHING_WENT_WRONG);
    
     const newMember: MemberInput = req.body;
     newMember.memberImage = file?.path.replace(/\\/g,"/");
     newMember.memberType = MemberType.RESTAURANT;
     const memberService = new MemberService();
     const result = await memberService.processSignup( newMember );
    // TODO: SESSION AUTHENTICATION

      req.session.member = result;
      req.session.save(function () {
       res.redirect("/admin/product/all");     
      });
   } catch (err) {
      console.log("Error, processSignup:", err);
      const message = 
       err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
      res.send(
         `<script> alert ("${message}"); window.location.replace('admin/signup') </script>`
      );
   }
};

restaurantController.processLogin = async (
   req: AdminRequest, 
   res: Response) => {
   try {
     console.log("processLogin");
     
     const input: LoginInput = req.body;
     const memberService = new MemberService();
     const result = await memberService.processLogin( input );

      req.session.member = result;
      req.session.save(function () {
       res.redirect("/admin/product/all");     
      });
   } catch (err) {
      console.log("Error, processLogin:", err);
      const message = 
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
      res.send(
         `<script> alert ("${message}"); window.location.replace('admin/signup') </script>`
      );
   }
};

restaurantController.logout = async (
   req: AdminRequest, 
   res: Response) => {
   try {
     console.log("logout");
      req.session.destroy(function () {
       res.redirect("/admin");     
      });
   } catch (err) {
      console.log("Error, logout:", err);
      res.send(err);
   }
};

restaurantController.checkAuthSession = async (
   req: AdminRequest, 
   res: Response) => {
   try {
     console.log("checkAuthSession");
     if(req.session?.member) res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
     else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
   } catch (err) {
      console.log("Error, checkAuthSession:", err);
      res.send(err);
   }
};

restaurantController.verifyRestaurant = (
   req: AdminRequest, 
   res: Response,
   next: NextFunction
) => {
   
     if (req.session?.member?.memberType === MemberType.RESTAURANT) {
      req.member = req.session.member;
      next();
     } else {
       const message = Message.NOT_AUTHENTICATED;
      res.send(
         `<script> alert("${message}"); window.location.replace('/admin/login'); </script>`
      );
     }
   }; 

export default restaurantController;