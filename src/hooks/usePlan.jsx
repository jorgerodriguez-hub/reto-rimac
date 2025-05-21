import { useState, useEffect } from 'react';
import axios from 'axios';

const usePlansData = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json');
                setPlans(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    return { plans, loading, error };
};

export default usePlansData;