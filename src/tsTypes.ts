import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { NextResponse } from "next/server";

export interface RouterInterface {
    router: AppRouterInstance;
}

export interface SignupType {
    username: string,
    email: string,
    password: string,
    router?: AppRouterInstance

}

export interface LoginInterface {
    email: string,
    password: string,
    router?: AppRouterInstance
}

export interface TokenInterface {
    email: string,
    response: NextResponse,
    username: string
    _id: string
}

