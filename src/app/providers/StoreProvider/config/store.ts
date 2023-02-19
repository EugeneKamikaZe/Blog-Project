import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
// import { counterReducer } from 'entities/Counter'; не работает
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
