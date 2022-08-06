import React from 'react';
import Card from 'react-bootstrap/Card';

export default class WeatherDay extends React.Component{

render(){
    return(
      <>
          <Card style={{ width: '11rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZ2FqVfWvTxq94I3UbPsH1-KwDnIHuUf3TA&usqp=CAU" />
          <Card.Body>
            <Card.Title>{this.props.day.date}</Card.Title>
            <Card.Text>
            {this.props.day.description}
            </Card.Text>
          </Card.Body>
        </Card>
       
      {/* <li key={this.props.index}>: </li>  */}
        </>
    )
}
}