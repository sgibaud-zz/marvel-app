
import React, { Component } from 'react';
import '../css/marvelCard.css';
import Modal from 'react-modal';



class Modals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openModal: false
        }
    }

    /*clickModal = () => {
        this.setState({openModal:true});
    }*/

    /*const hideModal = () => {
        setModalIsOpen(false);
    }*/

    render() {


/*
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
            </Modal>*/

        return (
            <>
            </>

        )
    }

}



export default Modals;