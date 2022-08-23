import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  tagTypes: ["Stu"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "students",
      providesTags: ['Stu']
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
      invalidatesTags: ["Stu"],
    }),
    updateStudent: builder.mutation({
      query: (payload) => ({
        url: `students/${payload.id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Stu"],
    }),
    deleteStudent: builder.mutation({
      query: (payload) => ({
        url: `students/${payload}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Stu'],
    }),
  }),
});

export const { useGetStudentsQuery, useAddNewStudentMutation, useGetStudentsByIdQuery, useDeleteStudentMutation, useUpdateStudentMutation } = studentsApi;
