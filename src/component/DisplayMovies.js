import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalOver from "./ModalOver";


export default class DisplayMovies extends React.Component{
constructor(props){
    super(props);
this.state={
showModle:false

}
}


handleShow=()=>{
this.setState({
showModle:true

})
}

handleClose=()=>{
this.setState({
showModle:false
})
}


render(){
return(
<>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${this.props.image_url}` } />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        <p>Total Votes: {this.props.total_votes}</p>
        <p>popularity: {this.props.popularity}</p>
        <p>Release Date: {this.props.release_date}</p>
        </Card.Text>
        <Button variant="primary" onClick={this.handleShow}>Overview</Button>
      </Card.Body>
    </Card>

    <ModalOver
     handleClose={this.handleClose}
     handleShow={this.handleShow}
     overview={this.props.overview}
     title={this.props.title}
     showModle={this.state.showModle}/>
    
</>
    
)
}
}