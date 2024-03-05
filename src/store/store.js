import { configureStore } from '@reduxjs/toolkit';
import dataQualitySlice from './dataQualitySlice';
import ProbMatchSlice from './ProbMatchSlice';
import guestDataCreateSlice from './guestDataCreateSlice';
import guestDetails from './guestDetails';
import roleSlice from './roleSlice';

const store = configureStore({
    reducer: {
        dataQuality: dataQualitySlice,
        ProbMatch: ProbMatchSlice,
        createData: guestDataCreateSlice,
        guestDetails: guestDetails,
        roleSlice: roleSlice,
    },
})

export default store;  