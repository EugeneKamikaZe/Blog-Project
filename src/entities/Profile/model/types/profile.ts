import { Country, Currency } from 'shared/const/common';

export interface ProfileProps {
    first: string;
    lastname: string;
    age: 22,
    currency: Currency,
    country: Country;
    city: string,
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: ProfileProps;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
