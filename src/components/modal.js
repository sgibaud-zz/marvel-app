import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

//On récupère des parents (marvelCard et slideCharacter) les props
class MarvelModal extends React.Component {

  render() {
    return (
      <Modal show={this.props.openModalCharacter}  >

        <ModalHeader id={this.props.characterId} >
          <ModalTitle>{this.props.heroName}</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <img className="imgModal" src={this.props.characterImg} alt={this.props.heroName} />        
            <p className="modalText">{this.props.description}</p>         
        </ModalBody >

        <ModalFooter className="modalFooter">
          <div className="btn" onClick={this.props.closeModalCharacter} >Close</div>
        </ModalFooter>

      </Modal>
    );
  }
}

export default MarvelModal;