import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './main';
import Header from './header';
import Footer from './footer';
import Weather from './weather';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Movies from './Movies';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lat: '',
      lon: '',
      cityName: '',
      imgUrl: '',
      messageError: '',
      arrData:[{discription:"", date:""}],
      messageErrorWeather:'',
      arrMove:[{title:"",overview:"",average_votes:"",
      total_votes:"",image_url:"",popularity:"",release_date:""}],
      errorMov:''
    }
  }

  handleChange = (e) => {

    let q = e.target.value;
    this.setState({
      city: q
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const urlLocation = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.81a25813b5280c170b107b4c3cd6c037&q=${this.state.city}&format=json`)
    try {
      this.setState({
        cityName: urlLocation.data[0].display_name,
        lat: urlLocation.data[0].lat,
        lon: urlLocation.data[0].lon,
        messageError: '',
        imgUrl: `https://maps.locationiq.com/v3/staticmap?key=pk.81a25813b5280c170b107b4c3cd6c037&center=${urlLocation.data[0].lat},${urlLocation.data[0].lon}&zoom=10`
      });
    } catch (error) {
      this.setState({
        messageError: 'the city dose not exist',
      });

    }

   this.displayWeather(urlLocation.data[0].lat ,urlLocation.data[0].lon,this.state.city);
   this.diplayMovies(this.state.city);
  }


  displayWeather = async (lat, lon,cityName) => {

  try {
    let weatherData = await axios.get(`https://date-weather-city.herokuapp.com/weather?lat=${lat}&lon=${lon}&searchQuery=${cityName}`)
    this.setState({
      arrData:weatherData.data,
      messageErrorWeather:""
    });

  } catch (error) {

    this.setState({
      messageErrorWeather: "The city dose not exist data for weather",
      arrData:[{discription:"", date:""}]
    });

  }

}

diplayMovies=async(cityName)=>{

  try{
let movCity=await axios.get(`https://date-weather-city.herokuapp.com/movies?searchQuery=${cityName}`);
// console.log(movCity);
this.setState({
arrMove:movCity.data,
errorMov:''
})
  }catch(error){

this.setState({
  errorMov:"the city does not have a movies",
  arrMove:[{title:"",overview:"",average_votes:"",
      total_votes:"",image_url:"",popularity:"",release_date:""}]
})
  }
}

  render() {
    return (
      <div className="App">

      {console.log(this.state.arrData)}
        <Header />
        <Form >
          <Form.Control type="text" placeholder="Enter citiry" id="city" onChange={this.handleChange} />
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Explore
          </Button>
        </Form>
        <Main
          cityName={this.state.cityName}
          lon={this.state.lon}
          lat={this.state.lat}
          imgUrl={this.state.imgUrl}
          messageError={this.state.messageError}
          messageErrorWeather={this.state.messageErrorWeather}
        />
        {/* <p>{this.state.arrData}</p> */}
        <Weather w={this.state.arrData} />
        <Movies arrM={this.state.arrMove} />
        <Footer />
      </div>
    );
  }
}

export default App;
