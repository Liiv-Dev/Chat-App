import { createContext, useState, useEffect, useContext } from 'react';
import { useAuthContext } from './AuthContext';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  // http://localhost:3001
  useEffect(() => {
    if (authUser) {
      const socket = io('https://convo-on6g.onrender.com', {
        query: {
          userId: authUser._id
        }
      });
      setSocket(socket);

      // socket.on is used to listen for an events on both the server and client side
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if(socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser])

  return <SocketContext.Provider value={{socket,onlineUsers}}> {children} </SocketContext.Provider>
};