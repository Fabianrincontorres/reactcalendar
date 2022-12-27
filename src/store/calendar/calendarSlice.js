import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempevent = {
    _id: 1,
    title: 'Evento de prueba',
    notes: "Evento ajustado al horario",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: 1,
        name: 'Fabian'
    }

}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempevent],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, actions)=>{
            state.activeEvent = actions.payload
        },
        resetActiveEvent: (state, actions)=>{
            state.activeEvent = []
        }
    }

})

export const {onSetActiveEvent, resetActiveEvent } = calendarSlice.actions;
