import React from "react";
import WeatherDay from "./WeatherDay";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Weather extends React.Component {




    render() {
        return (

            <>
                    <Row xs={1} md={6} className="g-4">
                {
                    this.props.w.map((ele,index) => {
                        return (
                            <>
                            <Col>
                            <WeatherDay day={ele}/>  
                            </Col>   
                          </> ) ;
                    })
                }
                </Row>
            </>
        )
    }
};

export default Weather;