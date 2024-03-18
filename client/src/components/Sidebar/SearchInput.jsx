import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import toast from 'react-hot-toast';
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";



const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      toast.error('Search must be at least 3 characters', {
        autoClose: 2000
      });
      return;
    }
  
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else { 
      toast.error('No User Found', {
        autoClose: 2000
      });
      return;
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input 
        type="text" 
        placeholder="Search..." 
        className="input input-bordered rounded-full" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-green-800 text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;