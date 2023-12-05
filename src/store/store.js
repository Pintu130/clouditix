import { configureStore } from '@reduxjs/toolkit';
import dataQualitySlice from './dataQualitySlice';
import ProbMatchSlice from './ProbMatchSlice';

const store = configureStore({
    reducer: {
        dataQuality: dataQualitySlice,
        ProbMatch: ProbMatchSlice,

    },
})

export default store;