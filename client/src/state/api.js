import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://company-employees-management.onrender.com" }),
    reducerPath: 'adminApi',
    tagTypes: ['EmployeesLiveInBulgaria', 'AllEmployeesInTeam', 'AverageSalary', 'EmployeesOverSixMonths', 'Companies', 'Post', 'AddCompany', 'DeleteCompany', 'Employees', 'DeleteEmployee', 'UpdateEmployee', 'CreateEmployee'],
    endpoints: (build) => ({
        getEmployeesLiveInBulgaria: build.query({
            query: () => 'employees/bulgarian',
            providesTags: ['EmployeesLiveInBulgaria']
        }),
        getAllEmployeesInTeam: build.query({
            query: () => 'employees/teams',
            providesTags: ['AllEmployeesInTeam']
        }),
        getAverageSalary: build.query({
            query: () => 'teams/average-salary',
            providesTags: ['AverageSalary']
        }),
        getEmployeesOverSixMonths: build.query({
            query: () => 'employees/over-six-months',
            providesTags: ['EmployeesOverSixMonths']
        }),
        getCompanies: build.query({
            query: () => 'companies',
            providesTags: ['Companies']
        }),
        getEmployees: build.query({
            query: () => 'employees',
            providesTags: ['Employees']
        }),
        addUpdateCompany: build.mutation({
            query: (payload) => ({
                url: `companies/${payload.id}`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['Post'],
        }),
        addCompany: build.mutation({
            query: (payload) => ({
                url: `companies`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['AddCompany'],
        }),
        deleteCompany: build.mutation({
            query: (id) => ({
                url: `companies/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['DeleteCompany'],
        }),
        deleteEmployee: build.mutation({
            query: (id) => ({
                url: `employees/${id}`,
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['DeleteEmployee'],
        }),
        updateEmployee: build.mutation({
            query: (payload) => ({
                url: `employees/${payload.id}`,
                method: 'PUT',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['UpdateEmployee'],
        }),
        createEmployee: build.mutation({
            query: (payload) => ({
                url: `employees/create`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['CreateEmployee'],
        }),
    }),
})

export const { useGetEmployeesLiveInBulgariaQuery, useGetAllEmployeesInTeamQuery, useGetAverageSalaryQuery, useGetEmployeesOverSixMonthsQuery, useGetCompaniesQuery, useAddUpdateCompanyMutation, useAddCompanyMutation, useDeleteCompanyMutation, useGetEmployeesQuery, useDeleteEmployeeMutation, useUpdateEmployeeMutation, useCreateEmployeeMutation } = api;