import { createSlice } from '@reduxjs/toolkit'

export const roleSlice = createSlice({
    name: 'role',
    initialState: {
        guestRole: "",
        singleRole: "",
        acclevel: ""
    },
    reducers: {
        setRole: (state, action) => {
            state.guestRole = action.payload;
        },
        setSingleRole: (state, action) => {
            state.singleRole = action.payload;
        },
        setAccLevel: (state, action) => {
            state.acclevel = action.payload;
        },
    }
})
export const { setRole, setSingleRole, setAccLevel } = roleSlice.actions;
export default roleSlice.reducer