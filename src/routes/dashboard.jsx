import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";



const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) {
            return navigate("/");
        }
    }, [user, loading]);

    return (
        <div id="dashboard" className="flex flex-col items-start mt-4 ml-4 min-h-[600px]">
            <div className="text-xl font-poppins font-semibold text-checkPurple">Welcome <span className='text-checkBlack font-normal'>{user?.email}</span></div>
            <div className='mt-48 text-xl font-bold'>Cool content soon to come</div>
        </div>
    );
};

export default Dashboard;
