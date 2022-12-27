import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

    const {isDataModalOpen, openModal} = useUiStore()
    const {rstActiveEvent} = useCalendarStore()

    const handleClick =()=>{
        console.log("click")
        rstActiveEvent()
        openModal()

    }


  return (
    <button
        className='btn btn-primary fab'
        onClick={handleClick}
    >
        <i className='fas fa-plus'></i>
    </button>
  )
}
