import React from 'react';

const styles = {
  image: {
    backgroundImage: 'url("/images/holding-hands-pic.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60%',
    width: '100%',
    height: '40%'
  },
  overlay: {
    backgroundColor: 'rgba(69, 69, 69, 0.4)',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  },
  textItalic: {
    color: '#f4f6ff',
    top: '50%',
    left: '10%',
    fontFamily: 'Merriweather',
    fontSize: '0.85rem',
    fontStyle: 'italic'
  },
  textName: {
    color: '#f4f6ff',
    bottom: '5%',
    right: '5%',
    fontFamily: 'Merriweather',
    fontSize: '1.2rem',
    fontStyle: 'italic'
  },
  text: {
    color: '#422300',
    lineHeight: '2rem'
  }
};

export default function Home(props) {
  return (
    <div>
      <div className="image-container" >
        <div style={styles.image} className="position-relative">
          <div style={styles.overlay} className="position-absolute"/>
          <h6 style={styles.textItalic} className="position-absolute m-0">where hope and care come together in sincerity</h6>
          <h2 style={styles.textName} className="position-absolute m-0">Hope Care Hospice</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-column justify-contents-center">
          <h1>Welcome to Hope Care Hospice</h1>
          <p />
          <p />
        </div>
      </div>
    </div>
  );
}
