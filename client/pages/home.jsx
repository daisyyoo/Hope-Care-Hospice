import React from 'react';

const styles = {
  image: {
    backgroundImage: 'url("/images/holding-hands-pic.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    // width: '100%',
    height: '22.5%'
  },
  textItalic: {
    color: '#422300'
  },
  overlay: {
    backgroundColor: 'rgba(69, 69, 69, 0.4)',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  },
  textName: {
    color: '#f4f6ff'
  },
  text: {
    color: '#422300',
    lineHeight: '2rem'
  }
};

export default function Home(props) {
  return (
    <div className="image-container" >
      <div style={styles.image} className="position-relative">
        <div style={styles.overlay} className="position-absolute"/>
        <h6 style={styles.textItalic}>where hope and care come together in sincerity</h6>
        <h1 style={styles.textName} className="mt-3 mb-5">Hope Care Hospice</h1>
      </div>
    </div>
  );
}
