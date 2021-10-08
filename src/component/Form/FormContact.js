import React, { Component } from "react";
import * as emailjs from 'emailjs-com'

import { Button, Form, FormGroup, Input } from 'reactstrap'
class FormContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: '<YOUR_EMAIL_ID>',
      subject: name,
      message_html: message,
     }
     emailjs.send(
       "service_nmx9k2e",
       "template_PLASrObN",
       templateParams,
       "user_ymZDj61vGImVYg00trXH8"
     );
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        <div>
         <FormGroup controlId="formBasicName">             
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Imię"
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">          
              <Input
                type="text"
                name="phone"
                className="text-primary"
                value={this.state.phone}
                onChange={this.handleChange.bind(this, 'phone')}
                placeholder="Telefon"
              />
            </FormGroup>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">            
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
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
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Wyślij
            </Button>
          </Form>
        </div>
      </>
    )
  }
};

export default FormContact;