import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const minutesToStayAuthenticated = 1;
  const sessionDuration = minutesToStayAuthenticated * 60 * 1000;

  const calculateRemainingSessionTime = () => {
    const lastLogin = JSON.parse(localStorage.getItem('authToken') || null);

    if (!lastLogin) {
      return 0;
    }

    const expiryTime = lastLogin.timestamp + sessionDuration;
    const currentTime = Date.now();
    const remainingTime = expiryTime - currentTime;

    return remainingTime > 0 ? remainingTime : 0;
  };

  useEffect(() => {
    const remainingTime = calculateRemainingSessionTime();

    if (remainingTime > 0) {
      setIsAuthenticated(true);

      const timer = setTimeout(() => {
        setIsAuthenticated(false);
      }, remainingTime);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isAuthenticated) {
      timer = setTimeout(() => {
        setIsAuthenticated(false);
      }, minutesToStayAuthenticated * 60 * 1000);
    }

    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
};

export default useAuth;
