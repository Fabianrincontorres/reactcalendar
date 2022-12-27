import { useState, useMemo } from 'react'
import ReactModal from "react-modal"
import Swal from 'sweetalert2'
import { useUiStore } from '../../hooks';
import { addHours, differenceInSeconds } from 'date-fns';
import ReactDatePicker, {registerLocale } from 'react-datepicker';
import es from 'date-fns/esm/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import './CalendarModal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

registerLocale('es', es)

ReactModal.setAppElement('#root');

export const CalendarModal = () => {

  const {isDateModalOpen, closeModal} = useUiStore();
  const [submitted, setSubmitted] = useState(false)

  const [formvalues, setFormValues] = useState({
    title:'Titulo',
    notes: 'Notas',
    start: new Date(),
    end: addHours(new Date(), 2)
  })

  const handleInputChanged=({target})=>{
    setFormValues({
      ...formvalues,
      [target.name]: target.value
    })
  }

  const handleDateChanged =(event, change)=>{
    setFormValues({
      ...formvalues,
      [change]: event,
    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();

    const difference = differenceInSeconds(formvalues.end, formvalues.start) 
    if(isNaN(difference) || difference <=0){
      Swal.fire({
        title: 'Error!',
        text: 'Fechas incorrectas',
        icon: 'error',
        confirmButtonText: 'OK ;)'
      })
      return ;
    }

    if (formvalues.title.length <= 0) {
      return;
    }

       
  }

  const titleClass = useMemo(() => {
    if(!submitted) return ''
    return (formvalues.title.length > 0)
      ? ''
      : 'is-invalid'
  }, [formvalues.title, submitted])

  const noteClass = useMemo(() => {
    if(!submitted) return ''
    return (formvalues.notes.length > 0)
      ? ''
      : 'is-invalid'
  }, [formvalues.notes, submitted])



  return (
    <ReactModal
      isOpen={isDateModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName='modal-fondo'
      shouldCloseOnOverlayClick

    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>

        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <ReactDatePicker
            className='form-control'
            selected={formvalues.start}
            onChange={e=>handleDateChanged(e, 'start')}
            dateFormat='Pp'
            locale='es'
            showTimeSelect
            timeCaption='Hora'
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <ReactDatePicker
            minDate={formvalues.start}
            className={'form-control'}
            selected={formvalues.end}
            onChange={e=>handleDateChanged(e, 'end')}
            dateFormat='Pp'
            locale='es'
            showTimeSelect
            timeCaption='Hora'
            
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formvalues.title}
            onChange={handleInputChanged}
          />
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className={`form-control ${noteClass}`}
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formvalues.notes}
            onChange={handleInputChanged}

          ></textarea>
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>

      </form>

    </ReactModal>
  )
}
