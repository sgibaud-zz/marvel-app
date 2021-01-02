import React, { useState } from 'react';
import'./marvelCard.css';
import Modal from 'react-modal';


Modal.setAppElement('#root')

function MarvelCard (){


      
    const [openModal, setModalIsOpen] = useState(false);    
        
    const hideModal = () => {
        setModalIsOpen(false);
    }
 
    
        return (
                <div>
                    

                    <div id="logo">
                       <img id="sizeLogo" src="logo2.jpg" alt="Marvel Logo" />
                    </div>
                    <div>
                        
                        <h4>Characters Marvel</h4>
                        <div className="#">
                                
                            <ul> 
                            <li className="#">
                                    <div>
                                        <div>
                                            <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" onClick={() => setModalIsOpen(true)} />
                                            </picture>
                                        </div>
                                    </div>
                            </li>
                            <li className="#">
                                    <div>
                                        <div>
                                            <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" />
                                            </picture>
                                        </div>
                                    </div>
                            </li>
                            <li className="#">
                                    <div>
                                        <div>
                                            <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" />
                                            </picture>
                                        </div>
                                    </div>
                            </li>
                            <li className="#">
                                    <div>
                                        <div>
                                            <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" />
                                            </picture>
                                        </div>
                                    </div>
                            </li>
                            <li className="#">
                                    <div>
                                        <div>
                                            <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" />
                                            </picture>
                                        </div>
                                    </div>
                            </li>
                            </ul> 
                                
                        </div>
                    </div>
    
            <Modal isOpen={openModal} hideModal={hideModal}>
                <div className="modalHeader">
                    <h2>Titre</h2>
                </div>
                <div className="heroesImg">
                    <img id="imgModal" src="thor.jpg" alt="thor" />
                </div>
                <div className="modalBody">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className="modalFooter">
                    <button className="modalBtn" onClick={hideModal}>Fermer</button>
                </div>
            </Modal>
                </div>


            
        )
    
    };

    
    
    

    
    export default MarvelCard;