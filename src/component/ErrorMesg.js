import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
export default class ErrorMesg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
    handleClose=()=>{
        this.setState({
            show:false
        })
    }

render(){
    return(
        <>
        <Alert variant="danger" onClose={this.handleClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
        <p>{this.props.messageError}</p>
        </p>
      </Alert>
      </>
)
}
}