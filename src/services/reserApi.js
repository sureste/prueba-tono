import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const reservamosApi = createApi({
    reducerPath : 'reservamosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://search.reservamos.mx/api/v2'}),
    endpoints : (builder) => ({
        getPlaces : builder.query({
            query: (name) => `places?q=${name}`
        })
    })
})


export const { useGetPlacesQuery } = reservamosApi