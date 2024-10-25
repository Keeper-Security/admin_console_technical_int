import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default (isLoggedIn: boolean) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, []);
};
