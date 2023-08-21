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
        })
    })
});

export const { useLoginMutation } = barbersApiSlice;