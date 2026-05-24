import React from "react";

function Navbar() {
  return (
    <div style={styles.nav} className="glass">
      <div style={styles.left}>
        <span style={styles.breadcrumb}>Projects / </span>
        <span style={styles.activePage}>Log Dashboard</span>
      </div>
      
      <div style={styles.right}>
        <div style={styles.search}>
          <span style={styles.searchIcon}>🔍</span>
          <input 
            type="text" 
            placeholder="Search logs, queries..." 
            style={styles.input}
          />
        </div>
        
        <div style={styles.actions}>
          <div style={styles.bell}>🔔</div>
          <button className="btn btn-primary">Upgrade Pro</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    borderBottom: "1px solid var(--border)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  left: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem",
  },
  breadcrumb: {
    color: "var(--text)",
  },
  activePage: {
    color: "var(--text-h)",
    fontWeight: "600",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  search: {
    position: "relative",
    width: "300px",
  },
  searchIcon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "14px",
    opacity: 0.6,
  },
  input: {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "8px 12px 8px 36px",
    color: "var(--text-h)",
    fontSize: "0.85rem",
    outline: "none",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  bell: {
    fontSize: "1.2rem",
    cursor: "pointer",
    opacity: 0.7,
  },
};

export default Navbar;