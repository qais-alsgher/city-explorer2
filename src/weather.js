import React from "react";

export default class Weather extends React.Component{

render(){
return(
<>
{
this.props.weather.map(items=>{

return(
<>
<p>{items.date}</p>
<p>{items.description}</p>

</>
);

})
}
</>

 )
}};

// export default Weather;