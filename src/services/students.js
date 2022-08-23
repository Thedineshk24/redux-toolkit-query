import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "students",
    }),
    getStudentsById: builder.query({
      query: (id) => `students/${id}`,
    }),
    addNewStudent: builder.mutation({
      query: (payload) => ({
        url: "students",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    updateStudent: builder.mutation({
      query: (payload) => ({
        url: `students/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    deleteStudent: builder.mutation({
      query: (payload) => ({
        url: `students/${payload}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetStudentsQuery, useAddNewStudentMutation, useGetStudentsByIdQuery, useDeleteStudentMutation, useUpdateStudentMutation } = studentsApi;
