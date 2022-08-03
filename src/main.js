import React from 'react';


class Main extends React.Component{
    
render(){
    return (
        <>
        <img src={this.props.imgUrl}  alt="city map"></img>
        <h5>{this.props.cityName}</h5>
        <p>lat:{this.props.lat}  lon:{this.props.lon} </p>
        <p>{this.props.messageError}</p>
        <p>{this.props.messageErrorWeather}</p>
         </> 
    )
}

}

export default Main;