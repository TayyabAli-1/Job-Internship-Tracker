import ApplicationCard from './ApplicationCard.jsx';
import { useState } from 'react';

function ApplicationList({ applications, deleteApplication, startEditing }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [sortOption, setSortOption] = useState('Newest');

    const filterApplications = (applications
        .filter((app) => (app.company.toLowerCase().includes(searchTerm.toLowerCase()) || app.position.toLowerCase().includes(searchTerm.toLowerCase())) && (filterStatus === "All" || app.status === filterStatus)));

    const sortApplications = (a, b) => {

        if (sortOption === 'Company-asc') {
            return a.company.localeCompare(b.company);
        } else if (sortOption === 'Company-desc') {
            return b.company.localeCompare(a.company);
        } else if (sortOption === 'Oldest') {
            return (new Date(a.date) - new Date(b.date));
        } else {
            return (new Date(b.date) - new Date(a.date));
        }
    }
    return (
        <div className="application-list">

            <div className="application-controls">

                <label htmlFor="search">Search Applications:</label>
                <input type="text" id="search"
                    placeholder="Search Applications..."
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>

                <div className="filter-buttons">

                    <label htmlFor="filter">Filter by Status:</label>
                    <select id="filter" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Rejected">Rejected</option>
                    </select>



                    <label htmlFor="sort">Sort Option:</label>
                    <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                        <option value="Company-asc">Company A-Z</option>
                        <option value="Company-desc">Company Z-A</option>
                    </select>
                </div>


            </div>


            <h2>Application List</h2>
            {applications.length === 0 ? (
                <h3>No Applications Yet !</h3>
            ) : (


                filterApplications.length === 0 ? (
                    <p>NO MATCHING APPLICATIONS HERE !</p>
                ) : (
                    [...filterApplications].sort(sortApplications).map((app) => (

                        <ApplicationCard
                            key={app.id}
                            application={app}
                            deleteApplication={deleteApplication}
                            startEditing={startEditing}
                        />

                    )))

            )}
        </div>


    );
}

export default ApplicationList;