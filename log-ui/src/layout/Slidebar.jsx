import React from "react";

function Slidebar() {
  return (
    <div style={styles.sidebar}>
      <h2>LOG AI</h2>
      <ul>
        <li>Dashboard</li>
        <li>Logs</li>
        <li>AI Insights</li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#111",
    color: "#fff",
    height: "100vh",
    padding: "20px",
  },
};

export default Slidebar;