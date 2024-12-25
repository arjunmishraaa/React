import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Form from './components/Form.jsx';

function App() {
  const [users, setUsers] = useState([]);

  // Updated to avoid closure issue in state update, using the function form of setState
  const handleSubmitData = (data) => {
    setUsers(prevUsers => [...prevUsers, data]); // Ensure you're using the latest users state
  };

  const handleRemove=(id)=>{
    setUsers(()=>users.filter((item,index)=> index!==id))
  }

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="container mx-auto">
        <Cards users={users} handleRemove={handleRemove} />
        <Form handleSubmitData={handleSubmitData} />
      </div>
    </div>
  );
}

export default App;
