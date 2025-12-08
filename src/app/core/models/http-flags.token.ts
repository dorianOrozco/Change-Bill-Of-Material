import { HttpContextToken } from "@angular/common/http";

export const SKIP_LOADING = new HttpContextToken<boolean>(() => false);

export const SKIP_ERROR_ALERT = new HttpContextToken<boolean>(() => false);

export const SKIP_SUCCESS_ALERT = new HttpContextToken<boolean>(() => false);

export const SKIP_JWT_AUTH = new HttpContextToken<boolean>(() => false);

export const STATUS_MSG = new HttpContextToken<string>(() => '');