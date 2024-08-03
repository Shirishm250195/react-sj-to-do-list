import { Button } from 'bootstrap';
import React, { useState } from 'react';
import './InsertToDo.css';


function InsertToDo(props) {

    const[toDoData,setToDo] = useState([])
    const [inputValue, setInputValue] = useState(''); 

    function handleData(event){
        setInputValue(event.target.value);
    }
    
    function sendFormData(event){
        if (inputValue !== '') {
            setToDo([...toDoData, inputValue]); 
            setInputValue('');
        }
        event.preventDefault()
    }

    const handleDelete = (index) => {
        setToDo(toDoData.filter((item, i) => i !== index));
    };
      
    return (
        <div>
            <div className='container'>
                <form  className="w-100 m-10" onSubmit={sendFormData}>
                    <input type="text" className="form-control mb-2" placeholder="Enter to do" onChange={handleData}/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
          
            <div className='flex-container'>
                {
                    toDoData.map((data, index) =>{   
                    
                        return   <div className="card md-6">
                                    <div className="card-body">
                                        <h5 className="card-title">{data}</h5>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger delete-button" onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                                </div>           
                    })
                }
            </div>  
        </div>
    );
}

export default InsertToDo;