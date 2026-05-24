import React from "react";

function AiPanel({ result, onAnalyze }) {
  return (
    <div className="card" style={styles.container}>
      <div style={styles.header}>
        <div style={styles.titleGroup}>
          <span style={styles.icon}>🤖</span>
          <h3 style={styles.title}>AI Diagnosis</h3>
        </div>
        {!result && (
          <button 
            className="btn btn-primary" 
            onClick={onAnalyze}
            style={styles.btn}
          >
            Run Intelligence Analysis
          </button>
        )}
      </div>

      <div style={styles.content}>
        {result ? (
          <div style={styles.result}>
            <div style={styles.sparkle}>✨</div>
            <p style={styles.text}>{result}</p>
          </div>
        ) : (
          <div style={styles.placeholder}>
            Click the button above to analyze the current log patterns for anomalies.
          </div>
        )}
      </div>
      
      {result && (
        <div style={styles.footer}>
          <button className="btn" style={styles.secondaryBtn} onClick={onAnalyze}>
            Re-run Analysis
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
    background: "linear-gradient(145deg, var(--bg-card) 0%, #1a1e28 100%)",
    border: "1px solid rgba(124, 58, 237, 0.3)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  icon: {
    fontSize: "1.5rem",
  },
  title: {
    margin: 0,
    fontSize: "1.1rem",
  },
  content: {
    minHeight: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    display: "flex",
    gap: "16px",
    padding: "16px",
    background: "rgba(124, 58, 237, 0.1)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.2)",
    width: "100%",
  },
  sparkle: {
    fontSize: "1.2rem",
  },
  text: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "var(--text-h)",
  },
  placeholder: {
    color: "var(--text)",
    fontSize: "0.9rem",
    textAlign: "center",
    maxWidth: "400px",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  secondaryBtn: {
    fontSize: "0.8rem",
    background: "transparent",
    border: "1px solid var(--border)",
    color: "var(--text)",
  }
};

export default AiPanel;
