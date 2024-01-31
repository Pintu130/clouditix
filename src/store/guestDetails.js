import { createSlice } from '@reduxjs/toolkit'

const guestDetailsSlice = createSlice({
    name: 'guestDetail',
    initialState: {
        goldenID: '',
        link : {},
        isEdit : ''
    },
    reducers: {
        setDetails: (state, action) => {
            state.goldenID = action.payload;
        },
        setChangeTab: (state, action) => {
            state.link = action.payload;
        },
        setEdititem: (state, action) => {
            state.isEdit = action.payload;
        },
    }
})

export const { setDetails, setChangeTab, setEdititem } = guestDetailsSlice.actions;
export default guestDetailsSlice.reducer