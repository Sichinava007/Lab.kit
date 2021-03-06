import React from "react";
import "./styles.css";
import Button from "./components/Button";
import UserList from "./components/UserList";
import Preloader from "./components/Preloader";

class App extends React.Component {
  state = {
    userInfo: undefined,
    loading: false
  };

  gettingUsers = async () => {
    this.setState({ loading: true });
    const api_url = await fetch("https://randomuser.me/api/?results=10");
    const data = await api_url.json();

    this.setState({
      userInfo: data.results,
      loading: false
    });
  };

  render() {
    if (this.state.loading) return <Preloader />;
    return (
      <div className="App">
        <Button onClick={() => this.gettingUsers()} label={"Download"} />
        <UserList users={this.state.userInfo} />
      </div>
    );
  }
}
export default App;
