import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Service } from "../../service/service";
export default class RequestAndReceiveDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "null",
      email: "null",
      image: "null",
      phone_num: "null",
      isReceive: this.props.isReceive ? true : false,
      isShow: true,
      isRender: true,
    };
  }
  componentDidMount() {
    this.getUserProfile(this.props.userId);
  }
  getUserProfile = async (userId) => {
    const res = await Service.getUserDetail(userId);
    if (!res.error) {
      this.setState({
        name: res.user.name,
        email: res.user.email,
        image: res.user.image,
        phone_num: res.user.phone_num,
      });
    }
  };
  deleteRequest = async () => {
    const res = await Service.putDeleteRequest(this.props.userId);
    if (!res.error) {
      this.setState({ isRender: false });
    }
  };
  acceptRequest = async () => {
    const res = await Service.putAcceptRequest(this.props.userId);
    if (!res.error) {
      this.setState({ isRender: false });
    }
  };
  render() {
    if (!this.state.isRender) return "";
    else
      return (
        <ListGroup.Item className="d-flex justify-content-between">
          {" "}
          <img
            src={this.state.image}
            style={{ width: "50px", height: "50px" }}
          />
          <h4>{this.state.name}</h4>
          <p>{this.state.phone_num}</p>
          {this.state.isReceive ? (
            <button
              className="btn btn-outline-info"
              onClick={() => {
                this.acceptRequest();
              }}
            >
              accept
            </button>
          ) : (
            <button
              className="btn btn-outline-dark"
              onClick={() => {
                this.deleteRequest();
              }}
            >
              delete request
            </button>
          )}
        </ListGroup.Item>
      );
  }
}
