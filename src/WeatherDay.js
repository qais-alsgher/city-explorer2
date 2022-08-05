import React from 'react';


export default class WeatherDay extends React.Component{

render(){
    return(

        <>
      <li key={this.props.index}>{this.props.day.description}: {this.props.day.date}</li> 
        </>
    )
}
}