import { useSelector, useDispatch } from "react-redux"
import { onSetActiveEvent, resetActiveEvent } from "../store";

export const useCalendarStore = () => {

    const {events, activeEvent} = useSelector(state => state.calendar)
    const dispatch = useDispatch();

    const setActiveEvent=(calendarEvent)=>{
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const rstActiveEvent=()=>{
        dispatch(resetActiveEvent())
    }

    return {
        events,
        activeEvent,
        setActiveEvent,
        rstActiveEvent
    }
}