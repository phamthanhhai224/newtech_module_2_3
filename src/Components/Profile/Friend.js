import React, { Component } from "react";
import { Service } from "./../../service/service";
import FriendDetail from "./FriendDetail";
class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendCount: 0,
      friends: [],
      componentFriend: [],
    };
  }
  componentDidMount() {
    this.getFriends();
  }
  getFriends = async () => {
    let res = await Service.getFriends();
    if (!res.error) {
      this.setState({
        friendCount: res.friends.length,
        friends: res.friends,
      });
    } else this.setState({ friends: [] });
    const friendArr = this.state.friends;
    let frCom = friendArr.map((fr) => {
      return <FriendDetail key={fr} userId={fr} />;
    });
    this.setState({ componentFriend: frCom });
  };

  render() {
    return (
      <div>
        <ul className="list-group"> {this.state.componentFriend} </ul>{" "}
      </div>
    );
  }
}

export default Friend;
