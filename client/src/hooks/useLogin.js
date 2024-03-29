import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ userName, password }) => {
    const success = handleInputErrors({ userName, password });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
      });
      if (!res.ok) { // check if the response status is not ok
        throw new Error('Login failed');
      }
      const data = await res.json();
      
      localStorage.setItem('convo-user', JSON.stringify(data));
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { login, loading };
}

export default useLogin

function handleInputErrors({ userName, password }) {
  if (!userName || !password) {
    toast.error('All fields are required');
    return false;
  }

  return true;
}