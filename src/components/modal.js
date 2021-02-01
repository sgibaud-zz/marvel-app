import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';




<<<<<<< HEAD
//CSS
import "../css/marvelCard.css";





class MarvelModal extends React.Component {
 /* constructor(props) {
    super(props);

    this.state = {
        images: [],
    }
=======

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
>>>>>>> f56a478e0c6c335465c247be899d51437b6704f8

      </Modal>
    );
  }
}

<<<<<<< HEAD
  componentDidMount() {
    const timestamp = Number(Date.now());
    const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
    const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;

    const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}&limit=100`)
        .then(resp => resp.json())
        .then(data => this.setState({ images: data.data.results }));
}
*/

  render() {


    return (
      <>

        <Modal show={this.props.openModal}  >
          <ModalHeader id={this.props.characterId} >
            <ModalTitle >{this.props.heroName}</ModalTitle>
          </ModalHeader>
          <ModalBody>

         {/*} {
            this.state.images !== null &&
            ({this.state.characterId} === this.state.images) {
            return  <img id="imgModal" src={this.props.characterImg} alt={this.props.heroName} />;
              
            }
              

          }
        */}
              <img id="imgModal" src={this.props.images} alt={this.props.heroName} />
              <div>
              
              <p id="modalText">{this.props.description}</p>
            
              
             
            </div>
          </ModalBody >
          <ModalFooter className="modalFooter">
            <button className="btn" onClick={this.props.closeModal} >Close</button>
            <p>copyright@</p>
          </ModalFooter>
        </Modal>




      </>

    );



  }
}

export default MarvelModal;
=======
export default MarvelModal;
>>>>>>> f56a478e0c6c335465c247be899d51437b6704f8
