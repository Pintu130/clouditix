import { configureStore } from '@reduxjs/toolkit';
import dataQualitySlice from './dataQualitySlice';
import ProbMatchSlice from './ProbMatchSlice';
import guestDataCreateSlice from './guestDataCreateSlice';
import guestDetails from './guestDetails';

const store = configureStore({
    reducer: {
        dataQuality: dataQualitySlice,
        ProbMatch: ProbMatchSlice,
        createData: guestDataCreateSlice,
        guestDetails: guestDetails
    },
})

export default store;