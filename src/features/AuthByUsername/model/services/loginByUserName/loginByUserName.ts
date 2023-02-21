import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

interface LoginByUserNameProps {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('login_error');
        }
    },
);

// export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue: string}>(
//     'login/loginByUserName',
//     async ({ username, password }: LoginByUserNameProps, thunkAPI) => {
//          const response = await axios.post('http://localhost:8000/login', {
//                 username,
//                 password,
//             });
//         return response.data;
//     },
// );
