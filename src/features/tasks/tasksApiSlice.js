import { apiSlice } from '../api/apiSlice'

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (task) => ({
        url: 'api/tasks/',
        method: 'POST',
        body: task
      }),
      invalidatesTags: ['Tasks']
    }),

    getAllTasks: builder.query({
      query: () => 'api/tasks/',
      providesTags: ['Tasks']
    }),

    updateTask: builder.mutation({
      query: (updatedTask) => ({
        url: `api/tasks/${updatedTask.id}`,
        method: 'PATCH',
        body: updatedTask
      }),
      invalidatesTags: ['Tasks']
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `api/tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Tasks']
    })
  })
})

export const {
  useCreateTaskMutation,
  useGetAllTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = tasksApiSlice
