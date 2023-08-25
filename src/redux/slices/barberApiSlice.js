import { apiSlice } from "./api";

const BARVERS_URL = "/barberShops";

export const barbersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${BARVERS_URL}/signin`,
                method: 'post',
                body: data
            })
        }),
        infos: builder.query({
            query: (data) => ({
                url: `${BARVERS_URL}/infos`,
                method: 'get',
                headers: {
                    'Authorization': data.token,
                }
            })
        })
    })
});

export const { useLoginMutation, useInfosQuery } = barbersApiSlice;