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
          <ModalTitle >Game rules</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <img className="imgModal" src={Marvel} alt='combattant Marvel' />        
            <p className="modalText">The fight happens in several rounds until one of the fighters looses.</p> 
            <p className="space-para">
              <strong>1. </strong>
              Pick <strong>1 ALLY</strong> and <strong>1 ENEMY</strong>.
              </p>
              <p className="space-para">
            <strong>2. </strong>Press the <strong>FIGHT</strong> button several times until <strong>the health bar of one of the two fighters is empty FIGHT</strong>.
             </p>
             <p className="space-para">
             <strong>3. </strong>Choose new fighters to play again.
             </p>
             <p className="space-para">
             <strong>Fighting skills:</strong> strengths and skills of the fighter.<br />
             <strong>Life : </strong>number of lives of the fighter.<br />
             </p>        
        </ModalBody >

        <ModalFooter className="modalFooter">
          <div className="btn" onClick={this.props.closeModal} >Close</div>
        </ModalFooter>

      </Modal>
    );
  }
}