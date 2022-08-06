import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class ModalOver extends React.Component{
constructor(props){
    super(props);
    this.state={
        showModle:false 
    }
}

handleshow=()=>{

    this.props.handleshow();
}

handleClose=()=>{

    this.props.handleClose();
}


render(){
    return(
        <>
        <Modal show={this.props.showModle} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.overview}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>

    )
}
}