import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getVideo } from './VideoApi'

// initial state 

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchSingelVideo = createAsyncThunk('video/fetchVideo', async (id) => {

    const video = await getVideo(id)

    return video
})

const singleVideoSlice = createSlice({
    name: 'video',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingelVideo.pending, (state) => {
                state.isError = false
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchSingelVideo.fulfilled, (state, action) => {
                //  console.log(action.payload)
                state.isLoading = false
                state.video = action.payload

            })
            .addCase(fetchSingelVideo.rejected, (state, action) => {
                state.isLoading = false
                state.video = {}
                state.isError = true
                state.error = action.error?.message
            })
    }

})

const vidoeReducer = singleVideoSlice.reducer

export default vidoeReducer