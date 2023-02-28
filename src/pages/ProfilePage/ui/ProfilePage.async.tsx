import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // TODO Исправить
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
