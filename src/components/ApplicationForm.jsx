import { useState, useEffect } from 'react';

function ApplicationForm({ addApplication, editingApplication, updateApplication, cancelEditing }) {

  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newApplication = {
      company,
      position,
      status
    };

    if (editingApplication) {
      updateApplication({ ...editingApplication, ...newApplication });
      cancelEditing();
      setCompany('');
      setPosition('');
      setStatus('');
    } else {
      addApplication(newApplication);

      setCompany('');
      setPosition('');
      setStatus('');
    }
  }

  useEffect(() => {
    if (editingApplication) {
      setCompany(editingApplication.company);
      setPosition(editingApplication.position);
      setStatus(editingApplication.status);
    }
  }, [editingApplication]);

  return (
    <div className="application-form">
  <h2>Application Form</h2>

  <form onSubmit={handleSubmit}>

    <div className="form-group">
      <label htmlFor="name">Company Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        required
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label htmlFor="status">Status:</label>

      <select
        id="status"
        name="status"
        value={status}
        required
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>

    <button type="submit">
      {editingApplication ? "Update Application" : "Add Application"}
    </button>

  </form>
</div>
  );
}

export default ApplicationForm;