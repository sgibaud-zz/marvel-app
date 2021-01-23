import React from 'react';
import Modal from 'react-bootstrap/Modal';




class MarvelModal extends React.Component{




  render() {
    return(
      <>
      <Modal show={this.props.openModal}>
    <p>Title {this.props.characterId}</p>
      </Modal>
      </>

  );

      
    
  }
}

export default MarvelModal;
