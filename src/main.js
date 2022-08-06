import React from 'react';
import Card from 'react-bootstrap/Card';


class Main extends React.Component{
    
render(){
    return (
        
        <>
        
        <Card>
        <Card.Img variant="top" src={this.props.imgUrl} alt={`city map ${this.props.imgUrl}`}/>
        <Card.Body>
          <Card.Text>
          {this.props.cityName}
          </Card.Text>
          <br/>
          <Card.Text>lat:{this.props.lat}  lon:{this.props.lon}</Card.Text>
        </Card.Body>
      </Card>
    
      </>
        
    )
}

}

export default Main;