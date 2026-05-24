import React from "react";

function Charts() {
  return (
    <div className="card" style={styles.container}>
      <h3 style={styles.title}>Throughput & Error Rate</h3>
      <div style={styles.chartArea}>
        <div style={styles.placeholderChart}>
          {/* Mock chart visualization with CSS */}
          <div style={styles.bars}>
            {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
              <div 
                key={i} 
                style={{ 
                  ...styles.bar, 
                  height: `${h}%`,
                  background: h > 85 ? 'var(--error)' : 'var(--accent)'
                }}
              ></div>
            ))}
          </div>
          <div style={styles.labels}>
            {['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35'].map(l => (
              <span key={l} style={styles.label}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
    marginBottom: "24px",
  },
  title: {
    marginBottom: "24px",
    fontSize: "1.1rem",
  },
  chartArea: {
    height: "200px",
    width: "100%",
    position: "relative",
  },
  placeholderChart: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  bars: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    gap: "12px",
    paddingBottom: "12px",
    borderBottom: "1px solid var(--border)",
  },
  bar: {
    flex: 1,
    borderRadius: "4px 4px 0 0",
    transition: "height 0.3s ease",
    opacity: 0.8,
  },
  labels: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "8px",
  },
  label: {
    fontSize: "0.7rem",
    color: "var(--text)",
  }
};

export default Charts;
