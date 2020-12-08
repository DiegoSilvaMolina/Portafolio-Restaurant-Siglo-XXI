import React, { Component } from 'react';

class Login extends Component { 

    state = {
        credentials: {username: '', password: ''}
    }

    register = event => {
        fetch('http://localhost:8000/api/users/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
            data => {
                console.log(data.token);
                window.location.href="./Home";
            }
        ).catch( error => console.error(error))
    }

    login = event => {
        fetch('http://localhost:8000/auth/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
            data => {
                console.log(data.token);
                window.location.href="./Home";
            }
        ).catch( error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() { 
    return ( 
    <div className="App">
       <h1>Login</h1>
        <br/>
       <label>
           Username:
           <input type="text" name="username" 
           value={this.state.credentials.username}
           onChange={this.inputChanged}></input>
       </label>
       <br/>
       <label>
           Pass:
           <input type="password" name="password"
           value={this.state.credentials.password}
           onChange={this.inputChanged}></input>
       </label>
       <br/>
       <input type="submit" value="Login" onClick={this.login}></input>
       <input type="submit" value="Register" onClick={this.register}></input>
     </div>
    ); 
  } 
} 
export default Login;