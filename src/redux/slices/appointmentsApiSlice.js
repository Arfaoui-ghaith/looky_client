import { apiSlice } from "./api";

const APPOINTMENTS_URL = "/appointments";

export const appointmentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    appointments: builder.query({
      query: (data) => ({
        url: `${APPOINTMENTS_URL}/barberShop`,
        method: "get",
        headers: {
          Authorization: data.token,
        },
      }),
    }),
    bookAppointment: builder.mutation({
      query: (data) => ({
        url: `${APPOINTMENTS_URL}/`,
        method: "post",
        headers: {
          Authorization: data.token,
        },
        body: data.body,
      }),
    }),
    updateAppointment: builder.mutation({
      query: (data) => ({
        url: `${APPOINTMENTS_URL}/${data.id}`,
        method: "put",
        headers: {
          Authorization: data.token,
        },
        body: data.body,
      }),
    }),
  }),
});

export const {
  useAppointmentsQuery,
  useBookAppointmentMutation,
  useUpdateAppointmentMutation,
} = appointmentsApiSlice;
