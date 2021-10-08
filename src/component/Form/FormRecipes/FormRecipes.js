import React, { Component } from "react";
import * as emailjs from 'emailjs-com'

import { Button, Form, FormGroup, Input } from 'reactstrap'
class FormRecipes extends Component {
  state = {
    name: '',   
    subject: '', 
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { email, message, subject } = this.state
    let templateParams = {
      from_name: email,
      to_name: '<YOUR_EMAIL_ID>',   
      subject: subject,  
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
      message: '',
      subject: ''
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
          <Form onSubmit={this.handleSubmit.bind(this)}>      

          <FormGroup controlId="formBasicSubject">      
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Nazwa potrawy"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
            
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                placeholder='Podaj składniki i sposób wykonania'
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
             Prześlij przepis
            </Button>
          </Form>
        </div>
      </>
    )
  }
};

export default FormRecipes;