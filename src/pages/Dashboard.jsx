import StatCard from "../components/StatCard";

function Dashboard({ total, applied, interview, rejected, interviewRate }) {

    return (

        <div className="dashboard-stats">
            <h1>Welcome to the Job Tracker Application</h1>
            <h2>Application Statistics</h2>
            <div className="grid">

                <StatCard title="Total Applications" value={total} />
                <StatCard title="Applied" value={applied} />
                <StatCard title="Interview" value={interview} />
                <StatCard title="Rejected" value={rejected} />
                <StatCard title="Interview Rate" value={`${interviewRate} %`} />

            </div>
        </div>

    )

}


export default Dashboard;