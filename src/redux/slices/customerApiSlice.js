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
        infos: builder.query({
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

export const { useLoginAsCustomerMutation, useLoginBySocialNetworkMutation, useInfosQuery } = customersApiSlice;