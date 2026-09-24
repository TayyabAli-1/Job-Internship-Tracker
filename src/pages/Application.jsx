
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";

function Application({
    addApplication,
    editingApplication,
    updateApplication,
    cancelEditing,
    applications,
    deleteApplication,
    startEditing
}) {

    return (
        <div className="application-page">
            <h1 >Job Internship Tracker</h1>
            <h3 >Track your job and internship applications with ease!</h3>

            <ApplicationForm
                addApplication={addApplication}
                editingApplication={editingApplication}
                updateApplication={updateApplication}
                cancelEditing={cancelEditing}
            />

            <ApplicationList
                applications={applications}
                deleteApplication={deleteApplication}
                startEditing={startEditing}
            />

        </div>
    );
}

export default Application;