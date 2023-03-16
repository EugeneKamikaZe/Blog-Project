export interface User {
    id: string | number;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;

    _isInited: boolean;
}
