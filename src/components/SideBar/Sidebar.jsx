
import './SideBar.css';
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">T</div>
        <h2>TaskFlow</h2>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-label">WORKSPACE</p>

        <button className="sidebar-item active">
          <span>▦</span>
          My Board
        </button>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-tip">
          <span className="tip-icon">✦</span>
          <h4>Stay productive!</h4>
          <p>Break big goals into smaller tasks and keep moving forward.</p>
        </div>

        <p className="sidebar-version">TASKFLOW · PERSONAL WORKSPACE</p>
      </div>
    </aside>
  );
}

export default Sidebar;
