
function Navbar({ search, onSearchChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="avatar">
          <span>👤</span>
        </div>

        <input
          type="text"
          placeholder="Search tasks..."
          className="search-input"
            value={search}
  onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
