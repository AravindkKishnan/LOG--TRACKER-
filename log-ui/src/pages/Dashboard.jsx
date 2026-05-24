import React, { useEffect, useState } from "react";
import { getLogs, analyzeLogs } from "../api";
import Cards from "../components/Cards";
import Table from "../components/Table";
import Charts from "../components/Charts";
import Filters from "../components/Filters";
import AiPanel from "../components/Aipanel";

function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState({ level: "", service: "" });
  const [ai, setAi] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getLogs(filter).then(res => {
      setLogs(res.data);
      setLoading(false);
    });
  }, [filter]);

  const handleAiAnalysis = () => {
    setAi("");
    analyzeLogs().then(r => setAi(r.data));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>System Overview</h1>
        <p style={styles.subtitle}>Monitoring {logs.length} active log streams across 4 services.</p>
      </div>

      <Cards logs={logs} />
      
      <div style={styles.mainGrid}>
        <div style={styles.leftCol}>
          <Filters setFilter={setFilter} />
          {/* <Charts /> */}
          <Table logs={logs} loading={loading} />
        </div>
        
        {/* <div style={styles.rightCol}>
          <AiPanel result={ai} onAnalyze={handleAiAnalysis} />
          
          <div className="card" style={styles.infoCard}>
            <h4 style={styles.infoTitle}>Service Health</h4>
            <div style={styles.healthList}>
              <div style={styles.healthItem}>
                <span>auth-service</span>
                <span style={{ color: 'var(--success)' }}>Online</span>
              </div>
              <div style={styles.healthItem}>
                <span>payment-gateway</span>
                <span style={{ color: 'var(--error)' }}>Issues</span>
              </div>
              {/* <div style={styles.healthItem}>
                <span>api-gateway</span>
                <span style={{ color: 'var(--success)' }}>Online</span>
              </div> */}
            {/* </div> */}
          {/* </div> */} 
        {/* </div> */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    animation: "fadeIn 0.5s ease-out",
  },
  header: {
    marginBottom: "32px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "8px",
  },
  subtitle: {
    color: "var(--text)",
    fontSize: "1rem",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 340px",
    gap: "24px",
    alignItems: "start",
  },
  leftCol: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  rightCol: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  infoCard: {
    padding: "20px",
  },
  infoTitle: {
    fontSize: "0.9rem",
    marginBottom: "16px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--text)",
  },
  healthList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  healthItem: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.85rem",
    paddingBottom: "8px",
    borderBottom: "1px solid var(--border)",
  }
};

export default Dashboard;
