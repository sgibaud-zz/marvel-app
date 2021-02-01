import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';





class MarvelModal extends React.Component {


  render() {
    return (
      <Modal show={this.props.openModalCharacter}  >

        <ModalHeader id={this.props.characterId} >
          <ModalTitle >{this.props.heroName}</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <img id="imgModal" src={this.props.characterImg} alt={this.props.heroName} />        
            <p id="modalText">{this.props.description}</p>         
        </ModalBody >

        <ModalFooter className="modalFooter">
          <button className="btn" onClick={this.props.closeModalCharacter} >Close</button>
        </ModalFooter>

      </Modal>
    );
  }
}

export default MarvelModal;