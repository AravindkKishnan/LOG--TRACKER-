import React from "react";

function Filters({ setFilter }) {
  const levels = ["All", "INFO", "WARN", "ERROR", "DEBUG"];
  
  return (
    <div className="card" style={styles.container}>
      <div style={styles.filterGroup}>
        <label style={styles.label}>Level</label>
        <select 
          style={styles.select} 
          onChange={(e) => setFilter(f => ({ ...f, level: e.target.value === "All" ? "" : e.target.value }))
        }
        >
          {levels.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <div style={styles.filterGroup}>
        <label style={styles.label}>Service</label>
        <input 
          type="text" 
          placeholder="Service name..." 
          style={styles.input}
          onChange={(e) => setFilter(f => ({ ...f, service: e.target.value }))}
        />
      </div>

      <div style={styles.filterGroup}>
        <label style={styles.label}>Time Range</label>
        <select style={styles.select}>
          <option>Last 1 hour</option>
          <option>Last 6 hours</option>
          <option>Last 24 hours</option>
          <option>Custom Range</option>
        </select>
      </div>

      <div style={styles.spacer}></div>
      
      <button className="btn btn-primary" style={{ padding: '8px 16px' }}>
        Export CSV
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    padding: "16px 24px",
    marginBottom: "24px",
  },
  filterGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "0.75rem",
    fontWeight: "600",
    color: "var(--text)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  select: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    padding: "6px 12px",
    color: "var(--text-h)",
    outline: "none",
    fontSize: "0.85rem",
  },
  input: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    padding: "6px 12px",
    color: "var(--text-h)",
    outline: "none",
    fontSize: "0.85rem",
    width: "180px",
  },
  spacer: {
    marginLeft: "auto",
  },
};

export default Filters;
