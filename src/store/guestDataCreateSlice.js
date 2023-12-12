import { createSlice } from '@reduxjs/toolkit'

const guestDataCreareSlice = createSlice({
    name: 'guestDataCreare',
    initialState: {
        Address: [],
        contect: [],
        identification: [],
        socialMedia: [],
        loyality: []
    },
    reducers: {
        setCreateAddressData: (state, action) => {
            state.Address.push(action.payload);
        },
        setContectData: (state, action) => {
            state.contect.push(action.payload);
        },
        setIdentificationData: (state, action) => {
            state.identification.push(action.payload);
        },
        setSocialMediaData: (state, action) => {
            state.socialMedia.push(action.payload);
        },
        setLotalityData: (state, action) => {
            state.loyality.push(action.payload);
        },
    }
});

export const { setCreateAddressData, setContectData, setIdentificationData, setSocialMediaData, setLotalityData } = guestDataCreareSlice.actions;
export default guestDataCreareSlice.reducer;