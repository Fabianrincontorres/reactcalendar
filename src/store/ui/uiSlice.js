import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDataModalOpen: false
    },
    reducers: {
        onOpenDateModal: (state)=>{
            state.isDataModalOpen = true;
        },
        onCloseDateModal: (state)=>{
            state.isDataModalOpen = false;
        }
    }

})

export const {onOpenDateModal, onCloseDateModal} = uiSlice.actions;
