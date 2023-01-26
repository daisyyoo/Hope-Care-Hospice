import React from 'react';

const styles = {
  text: {
    color: '#693802',
    lineHeight: '1.7rem'
  },
  header: {
    color: '#422300',
    fontFamily: 'Merriweather'
  },
  line: {
    color: '#422300'
  },
  imageContainer: {
    position: 'relative'
  },
  image: {
    position: 'absolute',
    padding: '0',
    objectFit: 'cover',
    height: '100%',
    right: '0'
  },
  height: {
    height: '100%'
  },
  textPadding: {
    padding: '0 50px'
  },
  titlePadding: {
    padding: '0 38px'
  }
};

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="container-fluid mt-3 background-half-color">
        <div className="row flex-column" style={styles.titlePadding}>
          <h1>About Us</h1>
        </div>
        <div className="row flex-column">
          <div style={styles.textPadding}>
            <h6 style={styles.text} className="pb-2">
              Hope Care Hospice is a Hospice Care provider based in Placentia, California. A lot of families in the community have need for our services and we know how critical our role is in the management of their health.
            </h6>
          </div>
          <div className="d-flex justify-content-end m-0 about-me-image-container" style={styles.imageContainer}>
            <img style={styles.image} className="about-me-image" src="/image/about-me-sm.webp" alt="lots-of-cookies" />
          </div>
          <div style={styles.textPadding}>
            <h6 style={styles.text} className="py-3">
              Because our clients are in such difficult situations, we can understand that it can be hard to make decisions when it comes to their hospice care arrangements. Family members are also oftentimes under the same stressful situations. That is why we provide services that benefit the patient as well as their entire household.
            </h6>
          </div>
          <div style={styles.textPadding}>
            <h6 style={styles.text} className="py-3">
              Hope Care Hospice is not a place, but rather an approach to care while focusing on the comfort of the patient who has a life-limiting illness. While their health issues may limit their life expectancy, it does not have to limit their quality of life in their remaining days. This is what we strive to achieve for the families under our care. If you would like the same privilege for your own family, please call us at 714-724-8033.
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
