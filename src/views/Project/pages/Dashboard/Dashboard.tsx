import useRedirectToLogin from "../../hooks/useRedirectToLogin";

const Dashboard = () => {
    // TODO: hookup redux
    const isLoggedIn = true;

    useRedirectToLogin(isLoggedIn);

    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;
