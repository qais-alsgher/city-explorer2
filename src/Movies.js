import React from "react";

export default class Movies extends React.Component {

    render() {
        return (
            <>
                {

                    this.props.arrM.map((ele,index)=> {
                        return (
                            <div key={index}>
                            <>
                            <h3>{ele.title}</h3>
                            <p>{ele.overview}</p>
                            <p> Avg-votes: {ele.average_votes}</p>
                            <p>total_votes: {ele.total_votes}</p>
                            {/* <img src={ele.image_url} alt="img move" /> */}
                            <p>popularity: {ele.popularity} </p>
                            <p>release_date: {ele.release_date}</p>
                            </>

                            </div>
                        )
                    })

                }
            </>
        )
    }
}