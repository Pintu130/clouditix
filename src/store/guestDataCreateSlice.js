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
        setCreateAddressDataUpdate: (state, action) => {
            const updatedData = action.payload;
            state.Address = [...updatedData];
        },
        setContectDataUpdate: (state, action) => {
            const updatedData = action.payload;
            state.contect = [...updatedData];
        },
        setIdentificationDataUpdate: (state, action) => {
            const updatedData = action.payload;
            state.identification = [...updatedData];
        },
        setSocialMediaDataUpdate: (state, action) => {
            const updatedData = action.payload;
            state.socialMedia = [...updatedData];
        },
        setLotalityDataUpdate: (state, action) => {
            const updatedData = action.payload;
            state.loyality = [...updatedData];
        },

    }
});

export const { setCreateAddressData, setContectData, setIdentificationData, setSocialMediaData, setLotalityData, setCreateAddressDataUpdate, setContectDataUpdate, setIdentificationDataUpdate, setSocialMediaDataUpdate, setLotalityDataUpdate } = guestDataCreareSlice.actions;
export default guestDataCreareSlice.reducer;