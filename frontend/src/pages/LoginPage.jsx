

// NOT IN USE // IGNORED IN JEST CONFIG //

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ axiosInstance }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const loginStatusRequest = await axiosInstance.get("/api/kirjauduttu");
        setLoginStatus(loginStatusRequest.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching login status:", error);
      }
    }

    fetchLoginStatus();
}, [axiosInstance]);
  
  console.log(loginStatus);
  return (
      <Link to={import.meta.env.BASE_URL}>
        <button type="button">
          Redirect
        </button>
      </Link>
  );
};

export default LoginPage;