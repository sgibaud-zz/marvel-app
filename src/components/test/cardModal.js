import React from 'react';




const CardModal = ({ showModal, children, hideModal }) => {
    
    return (
        showModal && (
            <div className="modalBackground" onClick={hideModal}>
                <div className="modalContainer">
                    { children }
                </div>

            </div>
        )
    )
}

export default CardModal;