import React from "react";

function Sidebar() {
  const menuItems = [
    { label: "Dashboard", icon: "📊", active: true },
    // { label: "Real-time Logs", icon: "📝" },
    // { label: "AI Insights", icon: "🤖" },
    // { label: "Security", icon: "🛡️" },
    // { label: "Settings", icon: "⚙️" },
  ];

  return (
    <div style={styles.sidebar} className="glass">
      <div style={styles.logo}>
        <div style={styles.logoIcon}>L</div>
        <h2 style={styles.logoText}>LOG AI</h2>
      </div>
      
      <nav style={styles.nav}>
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            style={{
              ...styles.navItem,
              ...(item.active ? styles.activeNavItem : {})
            }}
          >
            <span style={styles.icon}>{item.icon}</span>
            <span style={styles.label}>{item.label}</span>
          </div>
        ))}
      </nav>

      <div style={styles.footer}>
        <div style={styles.userProfile}>
          <div style={styles.avatar}>A</div>
          <div style={styles.userInfo}>
            <div style={styles.userName}>Aravind</div>
            <div style={styles.userRole}>Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "280px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: "32px 0",
    borderRight: "1px solid var(--border)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
    marginBottom: "48px",
    gap: "12px",
  },
  logoIcon: {
    width: "40px",
    height: "40px",
    background: "var(--accent)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
  logoText: {
    margin: 0,
    fontSize: "22px",
    letterSpacing: "1px",
  },
  nav: {
    flex: 1,
    padding: "0 16px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    borderRadius: "12px",
    marginBottom: "4px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    gap: "16px",
    color: "var(--text)",
  },
  activeNavItem: {
    background: "var(--accent-bg)",
    color: "var(--accent-light)",
    borderRight: "4px solid var(--accent)",
  },
  icon: {
    fontSize: "1.2rem",
  },
  label: {
    fontSize: "0.95rem",
    fontWeight: "500",
  },
  footer: {
    padding: "0 24px",
    marginTop: "auto",
  },
  userProfile: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "16px",
  },
  avatar: {
    width: "36px",
    height: "36px",
    background: "var(--accent)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontSize: "14px",
    fontWeight: "600",
    color: "var(--text-h)",
  },
  userRole: {
    fontSize: "12px",
    color: "var(--text)",
  },
};

export default Sidebar;
