import React from "react";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div style={styles.appContainer}>
      <Sidebar />
      <div style={styles.mainContent}>
        <Navbar />
        <main style={styles.scrollableArea}>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundColor: "var(--bg)",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  scrollableArea: {
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
  },
};

export default App;