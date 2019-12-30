import React from "react";

const styles = {
    color: 'white',
    background: '#6C6ED0',
    padding: 10
}

function Footer() {
  return (
    <div style={styles}>
        &copy; {new Date().getFullYear()} Copyright: BC Platforms
    </div>
  );
}

export default Footer;