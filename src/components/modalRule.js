import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Marvel from '../images/marvelcomicsunivers.jpg';

//On récupère des parents (marvelCard et slideCharacter) les props
export default class ModalRule extends React.Component {

  render() {
    return (
      <Modal show={this.props.openModal}  >

        <ModalHeader>
          <ModalTitle >Règle du jeu</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <img className="imgModal" src={Marvel} alt='combattant Marvel' />        
            <p className="modalText">Le combat se passe sur plusieurs tours jusqu'à la défaite d'un des 2 'héros'.</p> 
            <p className="space-para">
              <strong>1. </strong>
              Choisis <strong>1 ALLIÉ</strong> et <strong>1 ENNEMI</strong>.
              </p>
              <p className="space-para">
            <strong>2. </strong>Cliques autant de fois sur <strong>FIGHT</strong> pour réduire la barre de vie de chacun des personnages jusqu'à ce que la barre celle-ci arrive à 0.
             </p>
             <p className="space-para">
             <strong>3. </strong>Recommences le jeu en choississant de nouveaux combattants.
             </p>
             <p className="space-para">
             <strong>Fighting skills : </strong>force de combat du 'héro'.<br />
             <strong>Life : </strong>point de vie du 'héro'.<br />
             </p>        
        </ModalBody >

        <ModalFooter className="modalFooter">
          <div className="btn" onClick={this.props.closeModal} >Close</div>
        </ModalFooter>

      </Modal>
    );
  }
}