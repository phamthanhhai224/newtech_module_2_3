import React, { Component } from "react";
import { Service } from "../../service/service";

class FriendDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "null",
      email: "null",
      image: "null",
      phone_num: "null",
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
        isRender: true,
      });
    }
  };
  unfriend = async () => {
    const res = await Service.putUnfriend(this.props.userId);
    if (!res.error) {
      this.setState({ isRender: false });
    }
  };
  render() {
    if (!this.state.isRender) return <p></p>;
    else
      return (
        <li className="list-group-item d-flex justify-content-between">
          <img
            src={this.state.image}
            style={{ width: "50px", height: "50px" }}
          />
          <h4>{this.state.name}</h4>
          <p>{this.state.phone_num}</p>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              this.unfriend(this.props.userId);
            }}
          >
            delete
          </button>
        </li>
      );
  }
}

export default FriendDetail;
