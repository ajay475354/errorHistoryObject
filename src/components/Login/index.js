import { Component } from "react";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    console.log(history);
    history.replace("/");
  };

  onChangeName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      this.onSubmitSuccess();
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="bg_container">
        <div className="login_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="login_image"
            className="login_image"
          />
          <form className="form_container" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="form_image"
              className="form_image"
            />
            <div className="name_container">
              <label className="label" htmlFor="userName">
                Username:
              </label>
              <input
                type="text"
                id="userName"
                className="input_"
                onChange={this.onChangeName}
                value={username}
              />
            </div>

            <div className="name_container">
              <label className="label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="input_"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="button_login">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
