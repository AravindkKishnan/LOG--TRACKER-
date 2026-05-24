import React from "react";


function Table({ logs }) {
  
  const getBadgeClass = (level) => {
    switch (level) {
      case "ERROR": return "badge badge-error";
      case "WARN": return "badge badge-warn";
      case "INFO": return "badge badge-info";
      default: return "badge badge-success";
    }
  };

  return (
    <div className="card" style={styles.container}>
      <h3 style={styles.title}>Log Events</h3>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Timestamp</th>
              <th style={styles.th}>Level</th>
              <th style={styles.th}>Service</th>
              <th style={styles.th}>Message</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} style={styles.tr}>
                <td style={styles.td}>{log.timestamp}</td>
                <td style={styles.td}>
                  <span className={getBadgeClass(log.level)}>
                    {log.level}
                  </span>
                </td>
                <td style={styles.td}>
                  <code style={styles.code}>{log.service}</code>
                </td>
                <td style={styles.td}>{log.message}</td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan="4" style={styles.empty}>No logs found matching filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
    flex: 1,
  },
  title: {
    marginBottom: "20px",
    fontSize: "1.1rem",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  th: {
    padding: "12px 16px",
    borderBottom: "1px solid var(--border)",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    color: "var(--text)",
    fontWeight: "600",
  },
  tr: {
    borderBottom: "1px solid var(--border)",
    transition: "background 0.2s ease",
    ":hover": {
      background: "rgba(255,255,255,0.02)",
    }
  },
  td: {
    padding: "14px 16px",
    fontSize: "0.85rem",
    color: "var(--text-h)",
  },
  code: {
    background: "rgba(255,255,255,0.05)",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "0.8rem",
    color: "var(--accent-light)",
  },
  empty: {
    padding: "40px",
    textAlign: "center",
    color: "var(--text)",
    fontStyle: "italic",
  }
};

export default Table;
