import React from "react";

class Weather extends React.Component {




    render() {
        return (

            <>

                {
                    this.props.w.map(ele => {
                        return (
                            <>
                            <h6>{ele.description}</h6>
                             <h6>{ele.date}</h6>       
                          </> ) ;
                    })
                }
            </>
        )
    }
};

export default Weather;