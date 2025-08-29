import React from "react";

const Footer = () => {
  return (
    <footer style={{ 
      textAlign: "center", 
      padding: "20px", 
      background: "#f8f9fa", 
      marginTop: "40px", 
      borderTop: "1px solid #ddd" 
    }}>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
        © {new Date().getFullYear()} Puma Tour Travel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
