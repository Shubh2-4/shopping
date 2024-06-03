import React from 'react';

const ContactButton = ({ phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`} style={styles.link}>
      <button style={styles.button}>+91-7895240724</button>
    </a>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
};

export default ContactButton;
