import React, { Component } from "react";
import * as emailjs from "emailjs-com";

import { Button, Form, FormGroup, Input } from "reactstrap";
class FormContact extends Component {
  state = {
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { from_name, from_email, from_phone, message } = this.state;
    let templateParams = {
      from_name: from_name,
      from_email: from_email,
      from_phone: from_phone,
      message_html: message,
    };
    emailjs.send(
      "service_nmx9k2e",
      "template_PLASrObN",
      templateParams,
      "user_ymZDj61vGImVYg00trXH8"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      from_name: "",
      from_email: "",
      from_phone: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <>
        <div>
          <FormGroup controlId="formBasicName">
            <Input
              type="text"
              name="from_name"
              value={this.state.from_name}
              className="text-primary"
              onChange={this.handleChange.bind(this, "from_name")}
              placeholder="Imię"
            />
          </FormGroup>
          <FormGroup controlId="formBasicSubject">
            <Input
              type="text"
              name="from_phone"
              className="text-primary"
              value={this.state.from_phone}
              onChange={this.handleChange.bind(this, "from_phone")}
              placeholder="Telefon"
            />
          </FormGroup>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Input
                type="email"
                name="from_email"
                value={this.state.from_email}
                className="text-primary"
                onChange={this.handleChange.bind(this, "from_email")}
                placeholder="Email"
              />
            </FormGroup>

            <FormGroup controlId="formBasicMessage">
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                placeholder="Treść wiadomości"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Wyślij
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default FormContact;
