import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLike, getUnlike } from './likeUnlikeApi'
import axios from '../../utils/axios'

// initial state 

const initialState = {
    likes: 0,
    unlikes: 0
}



export const likeNumber = createAsyncThunk('likeUnlike/like', async (id) => {
    const like = await getLike(id)

    return like
})


export const unlikeNumber = createAsyncThunk('likeUnlike/unlike', async (id) => {

    const unlike = await getUnlike(id)

    return unlike
})



export const giveLike = createAsyncThunk('likeUnlike/giveLike', async ({ id, prevAmount }) => {
    let amount;

    if (amount === null || undefined) {
        amount = 0
    } else {
        amount = prevAmount
    }

    const newLikeAmount = +amount + 1
    const giveLike = await axios.patch(`/videos/${id}`, { likes: newLikeAmount })

    return giveLike
})

export const giveUnLike = createAsyncThunk('likeUnlike/giveUnlike', async ({ id, prevAmount }) => {
    let amount;

    if (amount === null || undefined) {
        amount = 0
    } else {
        amount = prevAmount
    }

    const newLikeAmount = +amount + 1



    const giveUnlike = await axios.patch(`/videos/${id}`, { unlikes: newLikeAmount })
    return giveUnlike


})


const likeUnlikeSlice = createSlice({
    name: 'video',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(likeNumber.fulfilled, (state, action) => {
                state.likes = action.payload

            })
            .addCase(unlikeNumber.fulfilled, (state, action) => {
                state.unlikes = action.payload
            })
            .addCase(giveLike.fulfilled, (state) => {
                state.likes += 1
            })
            .addCase(giveUnLike.fulfilled, (state) => {
                state.unlikes += 1
            })


    }

})

const likeUnlikeReducer = likeUnlikeSlice.reducer

export default likeUnlikeReducer