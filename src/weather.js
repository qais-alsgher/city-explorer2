import React from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {




    render() {
        return (

            <>

                {
                    this.props.w.map((ele,index) => {
                        return (
                            <>
                            <WeatherDay day={ele} index={index}/>     
                          </> ) ;
                    })
                }
            </>
        )
    }
};

export default Weather;