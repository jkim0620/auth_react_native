import React, { Component } from 'react';
// import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            label="Email"
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            placeholder="password"
            label="Password"
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
