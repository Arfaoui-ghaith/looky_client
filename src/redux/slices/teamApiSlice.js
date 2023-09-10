import { apiSlice } from "./api";

const TEAM_URL = "/teams";

export const servicesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addMember: builder.mutation({
            query: (data) => ({
                url: `${TEAM_URL}/`,
                method: 'post',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        updateMember: builder.mutation({
            query: (data) => ({
                url: `${TEAM_URL}/${data.id}`,
                method: 'put',
                headers: {
                    'Authorization': data.token,
                },
                body: data.body
            })
        }),
        deleteMember: builder.mutation({
            query: (data) => ({
                url: `${TEAM_URL}/${data.id}`,
                method: 'delete',
                headers: {
                    'Authorization': data.token,
                }
            })
        }),
    })
});

export const {
    useAddMemberMutation,
    useUpdateMemberMutation,
    useDeleteMemberMutation
} = servicesApiSlice;