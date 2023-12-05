import { createSlice } from '@reduxjs/toolkit';

const ProbMatchSlice = createSlice({
    name: 'ProbMatch',
    initialState: {},
    reducers: {
        setProbMatchMore: (state, action) => {
            state.data = action.payload
        },
        setProbMatchAdd: (state, action) => {
            state.add = action.payload
        }
    }

});

export const { setProbMatchMore, setProbMatchAdd } = ProbMatchSlice.actions;
export default ProbMatchSlice.reducer;