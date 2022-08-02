import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Main extends React.Component{
    
render(){
    return (
        <>
        <img src={this.props.imgUrl} class="img-fluid" alt=""></img>
        <h5>{this.props.name}</h5>
        <p>lat:{this.props.lat}  lon:{this.props.lon} </p>
         </> 
    )
}

}

export default Main;