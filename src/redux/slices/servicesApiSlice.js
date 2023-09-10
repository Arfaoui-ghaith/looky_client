import { apiSlice } from "./api";

const SERVICES_URL = "/services";
const GALLERIES_URL = "/galleries";

export const servicesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        services: builder.query({
            query: (data) => ({
                url: `${SERVICES_URL}/${data.id}`,
                method: 'get',
                headers: {
                    'Authorization': data.token,
                }
            })
        }),
        addService: builder.mutation({
            query: (data) => ({
                url: `${SERVICES_URL}/`,
                method: 'post',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        addImages: builder.mutation({
            query: (data) => ({
                url: `${GALLERIES_URL}/?serviceId=${data.id}`,
                method: 'post',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        getService: builder.query({
            query: (data) => ({
                url: `${SERVICES_URL}/${data.id}`,
                method: 'get'
            })
        }),
        deleteService: builder.mutation({
            query: (data) => ({
                url: `${SERVICES_URL}/${data.id}`,
                method: 'delete',
                headers: {
                    'Authorization': data.token,
                }
            })
        }),
        updateService: builder.mutation({
            query: (data) => ({
                url: `${SERVICES_URL}/${data.id}`,
                method: 'put',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        deleteImage: builder.mutation({
            query: (data) => ({
                url: `${GALLERIES_URL}/${data.id}`,
                method: 'delete',
                headers: {
                    'Authorization': data.token,
                }
            })
        }),
    })
});

export const {
    useServicesQuery,
    useAddServiceMutation,
    useAddImagesMutation,
    useGetServiceQuery,
    useDeleteServiceMutation,
    useUpdateServiceMutation,
    useDeleteImageMutation
} = servicesApiSlice;