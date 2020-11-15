import React, { Component } from "react";
import { Service } from "../../service/service";
import { Container, Row, Button, Modal, Form } from "react-bootstrap";
export default class RequestAndReceive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      findUser: "",
    };
  }
  findUser = async (findUser) => {
    const res = await Service.getUserDetail(findUser);

    console.log(findUser);
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Button
            variant="success"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            addFriend
          </Button>
        </Row>
        <Row>
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Find user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Control
                  onChange={(e) => {
                    this.setState({ findUser: e.target.value });
                  }}
                  type="email"
                  placeholder="enter email"
                ></Form.Control>
                <Button
                  onClick={() => {
                    this.findUser(this.state.findUser);
                  }}
                >
                  Find
                </Button>
              </Form.Group>
              this is body
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => {
                  this.setState({ showModal: false });
                }}
              >
                close
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    );
  }
}
