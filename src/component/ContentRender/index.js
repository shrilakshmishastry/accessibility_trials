import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import { ListOfTrials } from "../../utils/listOfTrials";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './content.scss';

const ContentRender = () => {
  const [activenIndex, setActiveIndex] = useState(0);
  const [content, setContent] = useState([]);
  const navigator = useNavigate();


  useEffect(() => {
    let inter = [];
    let endIndex = ListOfTrials.length > 5 ? 5 : ListOfTrials.length;
    for (let i = 0; i < endIndex; i++) {
      inter.push(ListOfTrials[i]);
    }
    setContent(inter);
  }, [])

  const handleNextBtnClick = () => {
    let inter = [];
    let startIndex = activenIndex + 5 > ListOfTrials.length ? activenIndex + (ListOfTrials.length - activenIndex) : activenIndex + 5;
    let endIndex = activenIndex + 10 > ListOfTrials.length ? activenIndex + (ListOfTrials.length - activenIndex) : activenIndex + 10;
    // console.log(startIndex, endIndex);
    for (let i = startIndex; i < endIndex; i++) {
      inter.push(ListOfTrials[i]);
    }
    setContent(inter);
    setActiveIndex(activenIndex + 5);
  }

  const handlePreviousClick = () => {
    let inter = [];
    let startIndex = activenIndex - 5;
    let endIndex = activenIndex - 1;
    for (let i = startIndex; i <= endIndex; i++) {
      inter.push(ListOfTrials[i]);
    }
    setContent(inter);
    setActiveIndex(activenIndex - 5);
  }

  return (
    <Container>
      <Row className="mb-5 mt-3">
        {
          content.map((value) => {
            return (
              <Col key={value.title} md={3} lg={4}>
                <Card tabIndex={0} onClick={() => navigator(value.url)} >
                  <Card.Header className="cardHeaderBg">
                    <h4 className="text-white">{value.title[0]}</h4>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {value.title}
                    </Card.Title>
                    <Card.Text>
                      {
                        value.description
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <Row>
        <Pagination
          pageCounterToShowInit={3}
          totalNumberOfItems={ListOfTrials.length}
          handleNextBtnClick={() => { handleNextBtnClick() }}
          handlePreviousBtnClick={() => { handlePreviousClick() }}
          itemsPerPage={5} />
      </Row>

    </Container >
  );
}

export default ContentRender;