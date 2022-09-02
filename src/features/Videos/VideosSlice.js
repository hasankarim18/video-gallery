import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getVideos } from './VideosApi'

// initial state 

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({ tags, search, authorId }) => {
    //console.log(authorId)

    const videos = await getVideos(tags, search, authorId)

    return videos

})

const videoSlice = createSlice({
    name: 'videos',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {

                state.isLoading = false
                state.videos = action.payload

            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false
                state.videos = []
                state.isError = true
                state.error = action.error?.message
            })
    }

})

const vidoesReducer = videoSlice.reducer

export default vidoesReducer