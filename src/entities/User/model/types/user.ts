export interface User {
    id: string | number;
    username: string;
}

export interface UserSchema {
    authData?: User;

    _isInited: boolean;
}
