import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // TODO для наглядности
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
