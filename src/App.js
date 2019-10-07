import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import PaypalButton from './PaypalButton'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const CLIENT = {
  sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION
}

const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox'

class App extends Component<> {
  render() {
    const onSuccess = payment => console.log('Successful payment!', payment)
    const onError = error =>
      console.log('Erroneous payment OR failed to load script!', error)
    const onCancel = data => console.log('Cancelled payment!', data)
    return (
      <Container>
        <Row>
          <Col
            lg={9}
            className="justify-content-lg-center"
            style={{ paddingTop: '72px' }}>
            <div>
              <PaypalButton
                client={CLIENT}
                env={ENV}
                commit={true}
                currency={'USD'}
                total={150}
                onSuccess={onSuccess}
                onError={onError}
                onCancel={onCancel}
              />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
