import { apiSlice } from "./api";

const BARVERS_URL = "/barberShops";

export const barbersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginAsBarber: builder.mutation({
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
        }),
        updateBarberInfos: builder.mutation({
            query: (data) => ({
                url: `${BARVERS_URL}/infos`,
                method: 'put',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        updateBarberPassword: builder.mutation({
            query: (data) => ({
                url: `${BARVERS_URL}/password`,
                method: 'put',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        updateBarberAvatar: builder.mutation({
            query: (data) => ({
                url: `${BARVERS_URL}/infos`,
                method: 'post',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
    })
});

export const {
    useLoginAsBarberMutation,
    useInfosQuery,
    useUpdateBarberAvatarMutation,
    useUpdateBarberPasswordMutation,
    useUpdateBarberInfosMutation
} = barbersApiSlice;