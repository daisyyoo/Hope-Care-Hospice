// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function Inquiry2() {
//   const [inputValue, setInputValue] = useState('');

//   const onChangeHandler = event => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <form className="container mt-3 d-flex flex-column col-lg-10"
//     // onSubmit={handleSubmit}
//     >
//       <div className="row">
//         <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
//           <Form.Group className="col-md-5 mb-3 m-md-0">
//             <Form.Label htmlFor="patientFirstName">Patient&apos;s First Name: *</Form.Label>
//             <Form.Control
//               required
//               autoFocus
//               id="patientFirstName"
//               type="text"
//               name="patientFirstName"
//               value={inputValue}
//               onChange={onChangeHandler} />
//           </Form.Group>
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="patientLastName">Patient&apos;s Last Name: *</Form.Label>
//             <Form.Control
//               required
//               id="patientLastName"
//               type="text"
//               name="patientLastName"
//               value={inputValue}
//               onChange={onChangeHandler} />
//           </Form.Group>
//         </div>
//         <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="patientPhoneNumber">Patient&apos;s Phone Number:</Form.Label>
//             <Form.Control
//               id="patientPhoneNumber"
//               type="text"
//               name="patientPhoneNumber"
//               value={inputValue}
//               onChange={onChangeHandler} />
//           </Form.Group>
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="diagnosis">Patient&apos;s Diagnosis:</Form.Label>
//             <Form.Select
//               id="diagnosis"
//               name="diagnosis"
//               value={this.state.diagnosis}
//               onChange={onChangeHandler}
//               //maybe it's an onSelect for this one
//             >
//               <option value="" />
//               <option value="ALS">ALS</option>
//               <option value="Alzheimer's">Alzheimer&apos;s</option>
//               <option value="Cancer">Cancer</option>
//               <option value="Heart Disease">Heart Disease</option>
//               <option value="HIV and AIDS">HIV and AIDS</option>
//               <option value="Liver Disease">Liver Disease</option>
//               <option value="Lung Disease">Lung Disease</option>
//               <option value="Renal Disease">Renal Disease</option>
//               <option value="Sepsis">Sepsis</option>
//               <option value="Other/Unknown">Other/Unknown</option>
//             </Form.Select>
//           </Form.Group>
//         </div>
//         <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="location">Patient&apos;s Current Location: *</Form.Label>
//             <Form.Select
//               id="location"
//               name="location"
//               value={this.state.location}
//               onChange={handleChange}
//               //this one might also be onSelect
//             >
//               <option value="" />
//               <option value="home">Home</option>
//               <option value="Hospital/Facility">Hospital/Facility</option>
//             </Form.Select>
//           </Form.Group>
//         </div>
//         <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="contactFirstName">Patient Contact First Name: *</Form.Label>
//             <Form.Control
//               required
//               id="contactFirstName"
//               type="text"
//               name="contactFirstName"
//               value={inputValue}
//               onChange={onChangeHandler} />
//           </Form.Group>
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="contactLastName">Patient Contact Last Name: *</Form.Label>
//             <Form.Control
//               required
//               id="contactLastName"
//               type="text"
//               name="contactLastName"
//               value={inputValue}
//               onChange={onChangeHandler} />
//           </Form.Group>
//         </div>
//         <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="email">Patient Contact Email: *</Form.Label>
//             <Form.Control
//               required
//               id="email"
//               type="text"
//               name="email"
//               value={inputValue}
//               onChange={onChangeHandler} />
//           </Form.Group>
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="contactPhoneNumber">Patient Contact Phone Number: *</Form.Label>
//             <Form.Control
//               required
//               id="contactPhoneNumber"
//               type="text"
//               name="contactPhoneNumber"
//               value={inputValue}
//               onChange={onChangeHandler} />
//           </Form.Group>
//         </div>
//         <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
//           <Form.Group className="col-md-5 mb-3 m-md-0" >
//             <Form.Label htmlFor="relationship">This Referral is made on behalf of: *</Form.Label>
//             <Form.Select
//               id="relationship"
//               name="relationship"
//               value={this.state.relationship}
//               onChange={handleChange}
//               //this one also maybe onSelect
//             >
//               <option />
//               <option value="professional healthcare">A professional healthcare facility or officer</option>
//               <option value="relative/loved one/myself">A relative, a loved one, or myself</option>
//             </Form.Select>
//           </Form.Group>
//         </div>
//         <div className="d-flex justify-content-between">
//           <div className="d-flex align-items-center text-center" >
//             <p style={styles.requirementMessage} className={this.state.submitted ? 'd-none' : 'px-3 show'}>{message}</p>
//           </div>
//           <Button type="submit" disabled={message.length !== 0} className="call-button-all m-2 mt-4 px-5"><b>SUBMIT</b></Button>
//         </div>
//         <div className="row flex-column my-2">
//           <div className="p-3 py-2 py-md-0">
//             <h6 style={styles.textMuted} className={this.state.submitted ? 'text-center show' : 'd-none'}>
//               Thank you for your submission! We will contact you soon.
//             </h6>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
