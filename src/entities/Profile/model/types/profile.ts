import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface ProfileProps {
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: ProfileProps;
    form?: ProfileProps;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
