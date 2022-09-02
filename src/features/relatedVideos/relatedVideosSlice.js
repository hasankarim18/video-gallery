import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRelatedVideos } from './relatedVideosApi'

// initial state 

const initialState = {
    relatedVideos: {},
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchVideo', async ({ tags, id }) => {
    //  console.log('tags', tags)
    //   console.log('id', id)

    const relatedVideo = await getRelatedVideos({ tags, id })

    return relatedVideo
})

const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideos.pending, (state) => {
                state.isError = false
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {

                state.isLoading = false
                state.relatedVideos = action.payload

            })
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.isLoading = false
                state.relatedVideos = {}
                state.isError = true
                state.error = action.error?.message
            })
    }

})

const relatedVideosReducer = relatedVideosSlice.reducer

export default relatedVideosReducer