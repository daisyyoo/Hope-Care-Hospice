import React from 'react';

const styles = {
  bgcolor: {
    backgroundColor: '#10375c'
  },
  title: {
    fontFamily: 'Merriweather',
    color: '#f4f6ff',
    fontWeight: '600',
    fontSize: '1rem'
  },
  text: {
    color: '#f4f6ff',
    fontSize: '0.8rem',
    lineHeight: '2rem'
  },
  image: {
    height: '60px',
    objectFit: 'contain'
  }
};
export default class Footer extends React.Component {
  render() {
    return (
      <footer style={styles.bgcolor} className="w-100 py-2" id="footer-container">
        <div className="container d-flex">
          <div className="d-flex align-items-left justify-content-center flex-column position-relative">
            <h4 style={styles.title}>Contact us!</h4>
            <p style={styles.text} className="m-0"><b>Tel: </b>(714)724-8033</p>
            <p style={styles.text} className="m-0"><b>Fax: </b>(213)289-5321</p>
            <p style={styles.text} className="m-0">HopeCareHospice2019@gmail.com</p>
            <p style={styles.text} className="m-0">601 E. Yorba Linda Blvd. Ste. 1E, Placentia, CA 92870</p>
            <div className="position-absolute">
              <img style={styles.image} src='/images/Hospice-logo-2.png' />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
