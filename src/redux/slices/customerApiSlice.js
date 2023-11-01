import { apiSlice } from "./api";

const CUSTOMERS_URL = "/customers";

export const customersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginAsCustomer: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/signin`,
                method: 'post',
                body: data
            })
        }),
        loginBySocialNetwork: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/signin`,
                method: 'patch',
                body: data
            })
        }),
        updateInfos: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/infos`,
                method: 'put',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        updateAvatar: builder.mutation({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/infos`,
                method: 'post',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        infosCustomer: builder.query({
            query: (data) => ({
                url: `${CUSTOMERS_URL}/infos`,
                method: 'get',
                headers: {
                    'Authorization': data.token,
                }
            })
        })
    })
});

export const { useLoginAsCustomerMutation, useUpdateAvatarMutation, useUpdateInfosMutation, useLoginBySocialNetworkMutation, useInfosCustomerQuery } = customersApiSlice;