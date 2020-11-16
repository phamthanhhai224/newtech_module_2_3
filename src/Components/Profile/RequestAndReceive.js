import React, { Component } from "react";
import { Service } from "../../service/service";
import {
  Container,
  Row,
  Button,
  Modal,
  Form,
  ListGroup,
} from "react-bootstrap";
import Detail from "./RequestAndReceiveDetail";
export default class RequestAndReceive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      findUser: "",
      name: "",
      phone_num: "",
      image: "",
      user_id: "",
      requestCom: [],
      receiveCom: [],
      showUser: false,
    };
  }
  findUser = async (findUser) => {
    const res = await Service.getUserDetailByEmail(findUser);
    if (!res.error)
      this.setState({
        name: res.user.name,
        phone_num: res.user.phone_num,
        image: res.user.image,
        user_id: res.user.user_id,
        showUser: true,
      });
  };
  componentDidMount() {
    this.getRequestReceive();
  }
  getRequestReceive = async () => {
    const res = await Service.getRequestReceive();
    if (!res.error) {
      let receive = res.receive;
      let request = res.request;
      let receiveCom = receive.map((userId) => {
        return <Detail key={userId} userId={userId} isReceive={true}></Detail>;
      });
      this.setState({ receiveCom: receiveCom });
      let requestCom = request.map((userId) => {
        return <Detail key={userId} userId={userId} />;
      });
      this.setState({ requestCom: requestCom });
    }
    console.log(this.state);
  };
  addFriend = async (user_id) => {
    const res = await Service.putRequest(user_id);
    if (res.error) {
      console.log("Loi addFr");
    } else console.log("add thanh cong");
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
              {this.state.showUser ? (
                <div style={{ display: "block" }}>
                  <img
                    src={this.state.image}
                    width="200px"
                    height="200px"
                  ></img>
                  <p>Name: {this.state.name}</p>
                  <p>Phone number:{this.state.phone_num}</p>
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      this.addFriend(this.state.user_id);
                    }}
                  >
                    Add
                  </Button>
                </div>
              ) : (
                ""
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => {
                  this.setState({
                    showModal: false,
                    name: "",
                    image: "",
                    phone_num: "",
                    showUser: false,
                  });
                }}
              >
                close
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
        <ListGroup>
          {this.state.receiveCom}
          {this.state.requestCom}
        </ListGroup>
      </Container>
    );
  }
}
