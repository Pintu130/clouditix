import { createSlice } from '@reduxjs/toolkit';

const dataQualitySlice = createSlice({
    name: 'dataQuality',
    initialState: {},
    reducers: {
        setDataQualityCreate: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const { setDataQualityCreate } = dataQualitySlice.actions;
export default dataQualitySlice.reducer;