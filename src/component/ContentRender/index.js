import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import { ListOfTrials } from "../../utils/listOfTrials";
import { Card, Col, Container, Row } from "react-bootstrap";

const ContentRender = () => {
  const [activenIndex, setActiveIndex] = useState(1);
  const [arrayLength, setArrayLength] = useState(0)
  useEffect(() => {
    const arrayLength = ListOfTrials.length > 5 ? 5 : ListOfTrials.length;
    setArrayLength(arrayLength);
  }, [])
  const handleNextBtnClick = () => {

    const arrLen = activenIndex + 5 > ListOfTrials.length ? ListOfTrials.length - (activenIndex + 5) : 5;
    const actInd = activenIndex + 5 > ListOfTrials.length ? ListOfTrials.length - activenIndex : activenIndex + 5;
    console.log(activenIndex + 5, ListOfTrials.length);
    setActiveIndex(actInd);
    setArrayLength(arrLen);
  }
  return (
    <Container>
      <Row>
        {
          [...Array(arrayLength).keys()].map((value, index) => {
            return (
              <Col key={ListOfTrials[(activenIndex - 1) + index].title} md={3} lg={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {value}
                      {ListOfTrials[(activenIndex - 1) + index].title}
                    </Card.Title>
                    <Card.Text>
                      {ListOfTrials[(activenIndex - 1) + index].description}
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
          handlePreviousBtnClick={() => { setActiveIndex(activenIndex - 5); setArrayLength(5) }}
          itemsPerPage={5} />
      </Row>

    </Container>
  );
}

export default ContentRender;