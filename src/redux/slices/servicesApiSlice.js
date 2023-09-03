import { apiSlice } from "./api";

const APPOINTMENTS_URL = "/services";

export const servicesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        services: builder.query({
            query: (data) => ({
                url: `${APPOINTMENTS_URL}/${data.id}`,
                method: 'get',
                headers: {
                    'Authorization': data.token,
                }
            })
        })
    })
});

export const { useServicesQuery } = servicesApiSlice;