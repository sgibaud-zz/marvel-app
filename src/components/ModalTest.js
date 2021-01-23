import React, { useState } from 'react';

const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);

    

    return (
        
        <div>
            <button>Open</button>

            <div className="modal-wrapper">
                <div className="modal-header">
                    <p>Welcome To Our Site</p>
                    <span className="close-modal-btn">x</span>
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Modal</h4>
                        <p>lorem ipsim</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel"  >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;