import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuthorVideos } from './authorSliceApi'

// initial state 

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchAuthorVideos = createAsyncThunk('authorFilter/fetchVideos', async ({ tags, search, authorId }) => {
    console.log(authorId)

    const videos = await fetchAuthorVideos(tags, search, authorId)

    return videos

})

const authorVideoSlice = createSlice({
    name: 'videos',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthorVideos.pending, (state) => {
                state.isError = false
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchAuthorVideos.fulfilled, (state, action) => {

                state.isLoading = false
                state.videos = action.payload

            })
            .addCase(fetchAuthorVideos.rejected, (state, action) => {
                state.isLoading = false
                state.videos = []
                state.isError = true
                state.error = action.error?.message
            })
    }

})

const authorVideoReducer = authorVideoSlice.reducer

export default authorVideoReducer