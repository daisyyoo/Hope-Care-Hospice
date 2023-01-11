import React from 'react';

const styles = {
  bgcolor: {
    backgroundColor: '#FDEEDC'
  },
  title: {
    fontFamily: 'Merriweather',
    color: '#422300',
    fontWeight: '600',
    fontSize: '1rem'
  },
  text: {
    color: '#422300',
    fontSize: '0.8rem'
  },
  image: {
    height: '100px',
    objectFit: 'cover'
  }
};
export default class Footer extends React.Component {
  render() {
    return (
      <footer style={styles.bgcolor} className="w-100 py-2" id="footer-container">
        <div className="container d-flex">
          <div className="d-flex align-items-left justify-content-center flex-column w-75">
            <h4 style={styles.title}>Delights by Daisy</h4>
            <p style={styles.text} className="m-0">Contact us!</p>
            <p style={styles.text} className="m-0">Email: daisy@delightsbydaisy.de</p>
            <p style={styles.text} className="m-0">Instagram: delights.by.daisy</p>
          </div>
          <div className="d-flex justify-content-end w-25">
            <img style={styles.image} src='/image/logo-sm.png' />
          </div>
        </div>
      </footer>
    );
  }
}
