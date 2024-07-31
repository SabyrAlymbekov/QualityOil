import './OnlineOrder.sass'
import { useState } from "react";
import OnlineOrderModal from "@components/Header/OnlineOrderModal.jsx";

export default function OnlineOrder() {
    const [showModal, setShowModal] = useState(false);
    const handlerShowModal = () => {
        setShowModal(true);
        console.log("wijodksc")
    }
    const handlerHideModal = () => {
        setShowModal(false);
    }
    return <>
        <button className="OnlineOrder" onClick={handlerShowModal}>
        Онлайн заказ
        </button>
        {showModal && <OnlineOrderModal onClose={handlerHideModal} ></OnlineOrderModal>}
    </>
}