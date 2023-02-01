import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const styles = {
  textTop: {
    color: '#10375c',
    lineHeight: '1.7rem'
  },
  textMuted: {
    color: '#10375c',
    fontSize: '0.9rem',
    lineHeight: '1.7rem'
  }
};

export default class Inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientFirstName: '',
      patientLastName: '',
      patientPhoneNumber: '',
      diagnosis: '',
      location: '',
      contactFirstName: '',
      contactLastName: '',
      email: '',
      contactPhoneNumber: '',
      relationship: '',
      submitted: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/newInquiry', req)
      .then(res => {
        if (res.status === 500) {
          this.setState({ error: true });
        }
        return res.json();
      })
      .then(newPatient => {
        this.setState({
          patientFirstName: '',
          patientLastName: '',
          patientPhoneNumber: '',
          diagnosis: '',
          location: '',
          contactFirstName: '',
          contactLastName: '',
          email: '',
          contactPhoneNumber: '',
          relationship: '',
          submitted: true
        });
        setTimeout(() => {
          this.setState({ submitted: false });
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form className="container mt-3 d-flex flex-column col-lg-10" onSubmit={handleSubmit}>
        <div className="row flex-column">
          <h1 className="px-3 py-2 my-2 my-lg-3">Referrals</h1>
        </div>
        <div className="row flex-column my-2">
          <div className="p-3 py-2 py-md-0">
            <h6 style={styles.textTop} >
              Thank you for referring your hospice-eligible patient to Hope Care Hospice. Complete the form below to submit your secure referral.
            </h6>
          </div>
          <div className="p-3 py-2 py-md-0">
            <h6 style={styles.textTop} >
              If you are a clinician who prefers to speak to us in person, call 714-724-8033 to make a referral over the phone.
            </h6>
          </div>
          <div className="p-3 py-2 py-md-0">
            <h6 style={styles.textMuted} className="text-muted" >
              Fields marked with * are required.
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
            <Form.Group className="col-md-5 mb-3 m-md-0">
              <Form.Label htmlFor="patientFirstName">Patient&apos;s First Name: *</Form.Label>
              <Form.Control
                required
                autoFocus
                id="patientFirstName"
                type="text"
                name="patientFirstName"
                value={this.state.patientFirstName}
                onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="patientLastName">Patient&apos;s Last Name: *</Form.Label>
              <Form.Control
                required
                id="patientLastName"
                type="text"
                name="patientLastName"
                value={this.state.patientLastName}
                onChange={handleChange} />
            </Form.Group>
          </div>
          <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="patientPhoneNumber">Patient&apos;s Phone Number:</Form.Label>
              <Form.Control
                id="patientPhoneNumber"
                type="text"
                name="patientPhoneNumber"
                value={this.state.patientPhoneNumber}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="diagnosis">Patient&apos;s Diagnosis:</Form.Label>
              <Form.Select
                id="diagnosis"
                name="diagnosis"
                value={this.state.diagnosis}
                onChange={handleChange}
                >
                <option value=""/>
                <option value="Alzheimer's">Alzheimer&apos;s</option>
                <option value="Dementia">Dementia</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="location">Patient&apos;s Current Location: *</Form.Label>
              <Form.Select
                id="location"
                name="location"
                value={this.state.location}
                onChange={handleChange}
              >
                <option value=""/>
                <option value="home">Home</option>
                <option value="AL">Assisted Living</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="contactFirstName">Patient Contact First Name: *</Form.Label>
              <Form.Control
                required
                autoFocus
                id="contactFirstName"
                type="text"
                name="contactFirstName"
                value={this.state.contactFirstName}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="contactLastName">Patient Contact Last Name: *</Form.Label>
              <Form.Control
                required
                id="contactLastName"
                type="text"
                name="contactLastName"
                value={this.state.contactLastName}
                onChange={handleChange} />
            </Form.Group>
          </div>
          <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="email">Patient Contact Email: *</Form.Label>
              <Form.Control
                required
                id="email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="contactPhoneNumber">Patient Contact Phone Number: *</Form.Label>
              <Form.Control
                required
                id="contactPhoneNumber"
                type="text"
                name="contactPhoneNumber"
                value={this.state.contactPhoneNumber}
                onChange={handleChange} />
            </Form.Group>
          </div>
          <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
            <Form.Group className="col-md-5 mb-3 m-md-0" >
              <Form.Label htmlFor="relationship">This Referral is made on behalf of: *</Form.Label>
              <Form.Select
                id="relationship"
                name="relationship"
                value={this.state.relationship}
                onChange={handleChange}
              >
                <option />
                <option value="mother">Mother</option>
                <option value="father">Father</option>
                <option value="friend">Friend</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-end">
            <Button type="submit" className="call-button-all m-2 mt-4 px-5"><b>SUBMIT</b></Button>
          </div>
          <div className="row flex-column my-2">
            <div className="p-3 py-2 py-md-0">
              <h6 style={styles.textMuted} className={this.state.submitted ? 'text-center show' : 'd-none'}>
                Thank you for your submission! We will contact you soon.
              </h6>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
