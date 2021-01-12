import React, { useState } from 'react';
import '../css/marvelCard.css';
import Modal from 'react-modal';
import Container from 'react-bootstrap/Container';


Modal.setAppElement('#root')

function MarvelCard(props) {



    const [openModal, setModalIsOpen] = useState(false);

    const hideModal = () => {
        setModalIsOpen(false);
    }


    return (
        <Container>
            <div>



                <div>

                    <h3 className="titleSlider textCenter">{props.cardTitle}</h3>
                    
                    <div className="cardContainer">

                        
                            
                                
                                    
                                        <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" onClick={() => setModalIsOpen(true)} />
                                        </picture>
                                    
                                        <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" onClick={() => setModalIsOpen(true)} />
                                        </picture>
                            
                                        <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" onClick={() => setModalIsOpen(true)} />
                                        </picture>

                                        <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" onClick={() => setModalIsOpen(true)} />
                                        </picture>

                                        <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" onClick={() => setModalIsOpen(true)} />
                                        </picture>

                                        <picture className="#">
                                            <img className="heroesCard" src="thor.jpg" alt="thor" onClick={() => setModalIsOpen(true)} />
                                        </picture>
                            
                       

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


        </Container>
    )

};






export default MarvelCard;