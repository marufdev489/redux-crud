import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUser } from '../features/userDetailSlice';

function CreateForm() {
    const [usersData, setUsersData] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setUsersData({
            ...usersData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(usersData);
        dispatch(createUser(usersData));
    }

  return (
   <>
   <form onSubmit={handleSubmit}>
    <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" onChange={handleChange}/>
    </div>

    <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" onChange={handleChange}/>
    </div>
    
    <div>
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" onChange={handleChange}/>
    </div>

    <div>
    <label for="gender">Gender:</label>
    <select id="gender" name="gender" onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>   
    </div>
     <input type="submit" value="Submit"/>
   </form>
   </>
  );
}

export default CreateForm;