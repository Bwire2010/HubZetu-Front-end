import { createSlice } from "@reduxjs/toolkit";

export const openReviewSlice = createSlice({
    name: 'openReviewSlice',
    initialState: {
        isReviewOpen: false
    },
    reducers: {
        openReviewForm: (state) => {
            state.isReviewOpen = !state.isReviewOpen
        }
    }
})

export const { openReviewForm } = openReviewSlice.actions

export default openReviewSlice.reducer