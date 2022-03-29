import React from 'react'
import reactDom from 'react-dom';
import { useNavigate } from 'react-router-dom';
import "../assets/CSS/Modal.css"

function Modal({ title, image, msg }) {
    const navigate = useNavigate();
    return reactDom.createPortal(
        <>
            {title && <div className="modal" onClick={e => navigate("/checkout")}>
                <img src={image} alt="" className="modal-image" />
                <div className="modal-title">
                    {title}
                </div>
            </div>}

            {msg && <div className="modal">
                <div className="modal-msg">
                    {msg}
                </div>
            </div> }
        </>,
        document.getElementById("modal")
    )
}

export default Modal;
