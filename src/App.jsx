import { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Application from './pages/Application.jsx';

function App() {

  const [applications, setApplications] = useState([]);
  const [editingApplication, setEditingApplication] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDarkmode, setIsDarkmode] = useState(false);


  useEffect(() => {
    if (!isInitialized) {
      return;
    }
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications, isInitialized]);

  useEffect(() => {
    const storedApplications = localStorage.getItem('applications');
    if (storedApplications) {
      setApplications(JSON.parse(storedApplications));
    }
    setIsInitialized(true);
  }, []);




  const totalApplications = applications.length;

  const appliedApplications = applications.filter((app) => {
    return app.status === "Applied"
  }).length;

  const interviewApplications = applications.filter((app) => {
    return app.status === "Interview"
  }).length;

  const rejectedApplications = applications.filter((app) => {
    return app.status === "Rejected"
  }).length;

  const interviewRate = totalApplications > 0 ? ((interviewApplications / totalApplications) * 100).toFixed(1) : 0;


  function addApplication(newApplication) {

    const applicationWithId = {
      ...newApplication,
      id: crypto.randomUUID(),
      date: new Date().toISOString()
    };
    // All Functions Like Add Application, Delete Application, Update Application, etc.
    setApplications([...applications, applicationWithId]);

  }

  function deleteApplication(id) {
    setApplications(applications.filter((app) => app.id !== id));
  }

  function updateApplication(updatedApplication) {
    setApplications(applications.map((app) => {
      if (app.id === updatedApplication.id) {
        return { ...app, ...updatedApplication };
      }
      return app;
    }));
  }

  function startEditing(application) {
    setEditingApplication(application);
  }

  function cancelEditing() {
    setEditingApplication(null);
  }


  return (
    <div className={isDarkmode ? "App-dark" : "App"}>

      <nav className='nav-bar'>

        <Link to="/dashboard">Home</Link>
        <Link to="/applications">Applications</Link>
        <button className='dark-mode' onClick={() => {

          setIsDarkmode(!isDarkmode);
        }}>Dark Mode</button>

      </nav>

      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route

          path="/dashboard"
          element={
            <Dashboard
              total={totalApplications}
              applied={appliedApplications}
              interview={interviewApplications}
              rejected={rejectedApplications}
              interviewRate={interviewRate}
            />
          }
        />

        <Route
          path="/applications"
          element={
            <Application
              addApplication={addApplication}
              editingApplication={editingApplication}
              updateApplication={updateApplication}
              cancelEditing={cancelEditing}
              applications={applications}
              deleteApplication={deleteApplication}
              startEditing={startEditing}
            />
          }
        />
      </Routes>

    </div>


  );
}

export default App