import { Col, Row,Card,Button } from "react-bootstrap"
import Carousels from "../component/Carousels"

const Dashboard = ({movie}) => {
  return (
    <div>
        <div className="container-fluid d-flex justify-content-center" >
            <Row>
                <Col md="12"> 
                    <Carousels />
                </Col>
            </Row>
        </div>

        <div className="container-fluid">
          <Row>
            <Col md="12">
                <div className="headings">
                    <h3>Now Showing</h3>
                </div>
            </Col>

            <Col md="11" className="mt-2 mx-auto">
                    <Row className="gap-5 px-4">
                    {movie.map((Item)=> (
                        <Card style={{width:'18rem'}} key={Item.id}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${Item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{Item.title}</Card.Title>
                                <Card.Text className="potong-text">
                                    {Item.overview}
                                </Card.Text>
                                <Row>
                                    <Col md="6">
                                        <a href={`/detail/${Item.id}`} className="btn btn-outline-warning text-dark"><i className="bi bi-book"></i> Detail</a>
                                    </Col>
                                    <Col md="6" className="text-end">
                                        <a href={`/cart/${Item.id}`} className="btn btn-success text-light"><i className="bi bi-bag-plus"></i> Buying</a>
                                    </Col>
                                </Row>
                                
                            </Card.Body>
                        </Card>
                    ))}
                    </Row>
                </Col>
          </Row>
        </div>
    </div>
  )
}

export default Dashboard
