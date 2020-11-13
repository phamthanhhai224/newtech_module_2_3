import React, { Component } from "react";
import { Service } from "./../../service/service";
import FriendDetail from "./FriendDetail";
class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendCount: 0,
      friends: [],
    };
  }
  componentDidMount() {
    this.getFriends();
    console.log(this.state);
  }
  getFriends = async () => {
    let res = await Service.getFriends();
    if (!res.error) {
      console.log(res.friends);
      this.setState({
        friendCount: res.friends.length,
        friends: res.friends,
      });
    } else this.setState({ friends: [] });
  };
  renderFriend = () => {
    this.state.friends.forEach((friend) => {
      return <FriendDetail name={friend.name} />;
    });
  };
  render() {
    return (
      <div
        className="tab-pane fade"
        id="pills-friend"
        role="tabpanel"
        aria-labelledby="pills-friend-tab"
      >
        <ul className="list-group">{this.renderFriend()}</ul>
      </div>
    );
  }
}

export default Friend;
