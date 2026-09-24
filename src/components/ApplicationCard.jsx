function ApplicationCard({ application, deleteApplication, startEditing }) {
    return (
        <div className="application-card">

            <div className="application-card-header">
                <span className="status">{application.status}</span>
            </div>

            <div className="application-info">
                <p>
                    <strong>Company:</strong> {application.company}
                </p>

                <p>
                    <strong>Position:</strong> {application.position}
                </p>

                <p>
                    <strong>Date:</strong>{" "}
                    {new Date(application.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    })}
                </p>

                <p>
                    <strong>Application ID:</strong> {application.id}
                </p>
            </div>

            <div className="card-buttons">
                <button
                    className="edit-button"
                    onClick={() => startEditing(application)}
                >
                    Edit
                </button>

                <button
                    className="delete-button"
                    onClick={() => deleteApplication(application.id)}
                >
                    Delete
                </button>
            </div>

        </div>
    );
}

export default ApplicationCard;