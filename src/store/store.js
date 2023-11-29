import { configureStore } from '@reduxjs/toolkit';
import dataQualitySlice from './dataQualitySlice';

const store = configureStore({
    reducer: {
        dataQuality: dataQualitySlice
    },
})

export default store;