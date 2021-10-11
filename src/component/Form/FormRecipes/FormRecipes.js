import React, { Component } from "react";
import * as emailjs from "emailjs-com";

import { Button, Form, FormGroup, Input } from "reactstrap";
class FormRecipes extends Component {
  state = {
    from_name: "",
    nazwa_potrawy: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { from_name, message, nazwa_potrawy } = this.state;
    let templateParams = {
      from_name: from_name,
      nazwa_potrawy: nazwa_potrawy,
      message_html: message,
    };
    emailjs.send(
      "service_nmx9k2e",
      "template_5fcxesx",
      templateParams,
      "user_ymZDj61vGImVYg00trXH8"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      from_name: "",
      message: "",
      nazwa_potrawy: "",
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
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicSubject">
              <Input
                type="text"
                name="nazwa_potrawy"
                className="text-primary"
                value={this.state.nazwa_potrawy}
                onChange={this.handleChange.bind(this, "nazwa_potrawy")}
                placeholder="Nazwa potrawy"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                placeholder="Podaj składniki i sposób wykonania"
                onChange={this.handleChange.bind(this, "message")}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Prześlij przepis
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default FormRecipes;
