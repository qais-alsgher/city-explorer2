import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './main';
import Header from './header';
import Footer from './footer'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city:'',
      lat:'',
      lon:'',
      cityName:'',
      imgUrl:''
    }
}

handleChange=(e)=>{

  let q=e.target.value;
  this.setState({
      city:q
  });
}

handleSubmit=async(e)=>{
e.preventDefault();
const urlLocation=await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.81a25813b5280c170b107b4c3cd6c037&q=${this.state.city}&format=json`)
this.setState({
  cityName:urlLocation.data[0].display_name,
  lat:urlLocation.data[0].lat,
  lon:urlLocation.data[0].lon,
  imgUrl:`https://maps.locationiq.com/v3/staticmap?key=pk.81a25813b5280c170b107b4c3cd6c037&center=${urlLocation.data[0].lat},${urlLocation.data[0].lon}&zoom=10`
});
}

  render(){
    return (  
      <div className="App">
       
      <>
      <Header />
      <>
          <Form >
            <Form.Control type="text" placeholder="Enter citiry" id="city" onChange={this.handleChange}/>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Explore
         </Button>
       </Form>
           </>
        <Main 
        cityName={this.state.cityName}
        lon={this.state.lon}
        lat={this.state.lat}
        imgUrl={this.state.imgUrl}
          />
      <Footer />
      </>
      </div>
    );}
}

export default App;
