import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import EDSLogo from './static/eds_logo.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = (): JSX.Element => {
    return (
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <Image src={EDSLogo} fluid />
              <div style={{ visibility: 'hidden' }}>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default App;
