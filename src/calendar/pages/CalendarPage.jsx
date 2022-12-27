import { useState } from 'react'
import { Calendar} from 'react-big-calendar'
import { calendarLocalizer, getMessagesES } from '../../helpers'
import { addHours } from 'date-fns'
import { useUiStore, useCalendarStore } from '../../hooks'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, NavBar, CalendarModal} from '../components'
import { FabAddNew } from '../components'


export const CalendarPage = () => {

  const [view, setview] = useState(localStorage.getItem('lastview') || 'week')
  const {isDataModalOpen, openModal} = useUiStore()
  const {events, setActiveEvent} = useCalendarStore()

  const onDoubleClick=(event)=>{
    console.log(isDataModalOpen)
    openModal()
  }

  const onSelect =(event)=>{
    setActiveEvent(event)
  }

  const onViewChanged=(event)=>{
   localStorage.setItem('lastview', event)
   setview(event)
  }

  return (
    <>
      <NavBar />

      <Calendar
        localizer={calendarLocalizer}
        events={events}
        defaultDate={new Date()}
        defaultView={view}
        culture = 'es'
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh' }}
        messages={getMessagesES()}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal/>
      <FabAddNew/>
    </>
  )
}

