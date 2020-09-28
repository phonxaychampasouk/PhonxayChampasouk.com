import React, { Component } from 'react';
import emailjs from "emailjs-com";
import { flexbox } from '@material-ui/system';
import { Center } from 'devextreme-react/map';

class Contact extends Component {
   constructor(props) {
      super(props);

      this.state = { 
         formSubmitted: false,
         contactName: '',
         contactEmail: '',
         contactSubject: '',
         contactMessage: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      const { name, value } = event.target;
      this.setState({ [name]: value });
      event.preventDefault();
   }

   handleSubmit(event) {
      const service_id = "default_service";
      const template_id = "contact_us";
      const {contactName, contactEmail, contactSubject, contactMessage} = this.state;

      var params = {
         "contactName": contactName,
         "contactEmail": contactEmail,
         "contactSubject": contactSubject,
         "contactMessage": contactMessage,
      };

      emailjs.send(service_id, template_id, params)
  	      .then(() => { 
            this.setState({formSubmitted: true});
         }, function(err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));

         });

      event.preventDefault();
   }

   componentDidMount() {
      emailjs.init("user_pB5iiwdQB3NQx9EcvTMPY");
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    const { formSubmitted } = this.state;

    const renderFormSubmitted = () => (
       <section style={{width: '100%', height: '400px', backgroundColor:'rgb(110, 164, 209)', marginTop: '30px', borderRadius: '15px'}}>
            <h1 style={{fontSize:'2rem', paddingTop:'45px' }}>Thank you for reaching out! I will do my best to read and respond to email submissions as quickly as possible.</h1>
       </section>
    );
    const renderForm = () => (
      <section id="contact">
         <div className="row section-head">
<img src='https://simpleicons.org/icons/gmail.svg' style={{height: "50px"}} />

            <div className="ten columns">

                  <p className="lead">Hi! If you have any questions or you would like to reach out to me, please fill out this form and lets connect!</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               <form action="" method="post" id="contactForm" name="contactForm" onSubmit={this.handleSubmit}>
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required"></span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required"></span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required"></span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={this.handleChange}></textarea>
                  </div>


					</fieldset>
				   </form>
               <div style={{display: 'flex', flexDirection:'column', alignContent:'Center'}}>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="https://simpleicons.org/icons/gmail.svg" />
                     </span>
                  </div>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>

      </div>
   </section>
    );
    
   return (
     <>
       {formSubmitted ?  renderFormSubmitted() : renderForm()}
      </>
   );
  }
}

export default Contact;