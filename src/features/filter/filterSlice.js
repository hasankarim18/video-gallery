import { createSlice } from '@reduxjs/toolkit'


// initial state 

const initialState = {
    tags: [],
    search: '',
    // authorId: 0

}

const filterSlice = createSlice({
    name: 'video',
    initialState: initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload)
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload)

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1)
            }
        },
        searched: (state, action) => {
            state.search = action.payload
        },
        resetSearch: (state) => {
            state.search = ''
            state.tags = []
            state.authorId = 0
        },
        authorSelected: (state, action) => {
            //  state.search = ''
            //  state.tags = []
            state.authorId = action.payload
        }
    }
})

const filterReducer = filterSlice.reducer

export const { tagSelected, tagRemoved, searched, resetSearch, authorSelected } = filterSlice.actions

export default filterReducer