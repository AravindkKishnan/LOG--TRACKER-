import React from "react";


function Cards({logs}) {
  const stats = [
    { label: "Total Logs", value: logs.length, color: "var(--info)", icon: "📋" },
    { label: "Errors", value: logs.filter(l => l.level === "ERROR").length, color: "var(--error)", icon: "⚠️" },
    { label: "Warnings", value: logs.filter(l => l.level === "WARN").length, color: "var(--warning)", icon: "🔔" },
    // { label: "Success Rate", value: "98.2%", color: "var(--success)", icon: "✅" },
  ];

  return (
    <div style={styles.container}>
      {stats.map((stat, i) => (
        <div key={i} className="card" style={styles.card}>
          <div style={styles.header}>
            <span style={{ ...styles.icon, background: `${stat.color}22`, color: stat.color }}>
              {stat.icon}
            </span>
            <span style={styles.label}>{stat.label}</span>
          </div>
          <div style={styles.value}>{stat.value}</div>
          <div style={styles.trend}>
            {/* <span style={{ color: stat.color }}>↑ 12%</span> vs last hour */}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
    marginBottom: "32px",
  },
  card: {
    padding: "24px",
    position: "relative",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  icon: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },
  label: {
    fontSize: "0.85rem",
    color: "var(--text)",
    fontWeight: "500",
  },
  value: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "var(--text-h)",
    marginBottom: "8px",
  },
  trend: {
    fontSize: "0.75rem",
    color: "var(--text)",
    opacity: 0.8,
  },
};

export default Cards;
