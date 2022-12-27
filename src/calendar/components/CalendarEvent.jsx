export const CalendarEvent = ({event}) => {

  const {title, user} = event
  return (
    <>
        <strong>{title}</strong>
        <span className="text-bold"> - {user.name} </span>
    </>
  )
}
