import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = 'a5a47c18197737e8eeca634cd6acb581'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/onecall' }),
    endpoints: (builder) => ({
        getTemp: builder.query({
            query: ({lat,lon}) => `?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        })
    })
})


export const { useGetTempQuery } = weatherApi