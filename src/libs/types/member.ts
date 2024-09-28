import { MemberStatus, MemberType } from "../enums/member.enum";
import { Session } from "express-session";
import { ObjectId } from "mongoose";
import { Request } from "express";



export interface Member {
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
}

export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}

export interface AdminRequest  extends Request {
    member: Member,
    session: Session & { member: Member };
    file: Express.Multer.File;
    files: Express.Multer.File[];
}