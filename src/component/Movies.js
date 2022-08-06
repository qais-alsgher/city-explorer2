import React from "react";
import DisplayMovies from "./DisplayMovies";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Movies extends React.Component {

    render() {
        return (
            <>
                     <Row xs={1} md={4} className="g-4">
                {
                    this.props.arrM.map((ele,index)=> {
                        return (
                           
                            <>
                            <Col>
                            <DisplayMovies title={ele.title}
                                            overview={ele.overview}
                                            total_votes={ele.total_votes}
                                            image_url={ele.image_url}
                                            popularity={ele.popularity}
                                            release_date= {ele.release_date}/>
                            </Col>
                            </>
                        )
                    })
                }
                </Row>
            </>
        )
    }
}

