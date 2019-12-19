import React from 'react';
import axios from 'axios';


export default class App extends React.Component {
    state = {
        fname: "", 
        name: "", 
        email: "", 
        message: "", 
        mailSent: false,
        error: null
    };

onFormSubmitSuccess = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios({
        
        url: 'http://localhost:3000/public/api/contact/index.php',
      
        method: "POST",
      
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: this.state
    })
        .then(result => {
            this.setState({
                mailSent: result.data.sent
            })
        })
        .catch(error => this.setState({ error: error.message }))
}

render() {
    return (
        <div className="App">          
            <div>
                <form action="#">
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."
                        value={this.state.fname}
                        onChange={e => this.setState({ fname: e.target.value })}
                    />

                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."
                        value={this.state.lname}
                        onChange={e => this.setState({ lname: e.target.value })}
                    />

                    <label>Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <label>Message</label>
                    <textarea id="message" name="message" placeholder="Write something.."
                        onChange={e => this.setState({ message: e.target.value })}
                        value={this.state.message}
                    ></textarea>

                    <input type="submit" onClick={e => this.onFormSubmitSuccess(e)} value="Submit" />
                    <div>
                        {this.state.mailSent &&
                            <div className="sucsess">Thank you for contcting me.</div>
                        }
                        {this.state.error &&
                            <div className="error">{this.state.error}</div>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
  }
}