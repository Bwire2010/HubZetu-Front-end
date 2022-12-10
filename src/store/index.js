import { configureStore } from "@reduxjs/toolkit";
import openReviewSlice from "./slices/openReview";
import authSlice from "./slices/authSlice";

export const store = configureStore ({
    reducer:{
        review: openReviewSlice,
        auth: authSlice
    }
})