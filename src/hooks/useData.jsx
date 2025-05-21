import axios from 'axios';
import { useEffect, useState } from 'react';

const useUserData = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('https://rimac-front-end-challenge.netlify.app/api/user.json');
                setUserData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { userData, loading, error };
};

export default useUserData;