import { configureStore } from '@reduxjs/toolkit';
import dataQualitySlice from './dataQualitySlice';
import ProbMatchSlice from './ProbMatchSlice';
import guestDataCreateSlice from './guestDataCreateSlice';

const store = configureStore({
    reducer: {
        dataQuality: dataQualitySlice,
        ProbMatch: ProbMatchSlice,
        createData: guestDataCreateSlice,

    },
})

export default store;