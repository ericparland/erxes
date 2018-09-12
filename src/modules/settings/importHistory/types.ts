import { IUser } from "../channels/types";

export interface IHistories {
    _id: string,
    success: string,
    failed: string,
    total: string,
    contentType: string,
    date: Date,
    user: IUser
    }
}