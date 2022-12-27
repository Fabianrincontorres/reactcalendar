import { useSelector, useDispatch } from "react-redux"
import { onOpenDateModal, onCloseDateModal } from "../store";

export const useUiStore = () => {

    const {isDataModalOpen} = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const openModal = ()=>{
        dispatch(onOpenDateModal())
    }
    const closeModal = ()=>{
        dispatch(onCloseDateModal())
    }

    return {
        isDataModalOpen,
        openModal,
        closeModal
    }
}