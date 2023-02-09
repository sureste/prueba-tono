import { configureStore, Store } from '@reduxjs/toolkit'
import { reservamosApi } from './services/reserApi'
import { weatherApi } from './services/weatherApi'

export const store = configureStore({
    reducer:{
        [reservamosApi.reducerPath] : reservamosApi.reducer,
        [weatherApi.reducerPath] : weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reservamosApi.middleware , weatherApi.middleware),
})