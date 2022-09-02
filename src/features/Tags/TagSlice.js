import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTags } from './TagApi'

// initial state 

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {

    const tags = await getTags()

    return tags

})

const tagSlice = createSlice({
    name: 'tags',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isError = false
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchTags.fulfilled, (state, action) => {

                state.isLoading = false
                state.tags = action.payload

            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false
                state.tags = []
                state.isError = true
                state.error = action.error?.message
            })
    }

})

const tagReducer = tagSlice.reducer

export default tagReducer