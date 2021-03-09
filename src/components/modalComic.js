import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

//On récupère des parents (slideComics et comicsCard) les props
class ModalComic extends React.Component {


  render() {
    return (
      <Modal show={this.props.openModalComic}  >

        <ModalHeader id={this.props.comicId} >
          <ModalTitle>{this.props.title}</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <img className="imgModal" src={this.props.comicImg} alt={this.props.title} />
          <a href={this.props.urls} target='_blanck'><p className="modalText" >More information on site Marvel</p></a>
          
        </ModalBody >
        
        <ModalFooter className="modalFooter">
          <button className="btn btnComic" onClick={this.props.closeModalComic} >Close</button>
        </ModalFooter>

      </Modal>
    );
  }
}

export default ModalComic;