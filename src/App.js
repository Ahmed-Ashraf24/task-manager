
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';
import TasksPage from './pages/TasksPage';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="app">
      <Navbar search={search} onSearchChange={setSearch} />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="main-content">
          <TasksPage search={search} />
        </main>
      </div>
    </div>
  );
}

export default App;
