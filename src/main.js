import React from 'react';


class Main extends React.Component{
    
render(){
    return (
        <>
        <p>{this.props.messageError}</p>
        <img src={this.props.imgUrl}  alt="city map"></img>
        <h5>{this.props.cityName}</h5>
        <p>lat:{this.props.lat}  lon:{this.props.lon} </p>
         </> 
    )
}

}

export default Main;