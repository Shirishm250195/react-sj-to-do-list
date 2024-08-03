import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GetToDo.css';

function GetToDo(props) {
    let [toDoList,setData]=useState([])
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
            setData(res.data)
            console.log("data",res.data)
        }).catch(error=>{
            console.log("error",error)
        })
    }, [])
    return (
        <div class="flex-container md-3">
            {
                toDoList.map(data =>{
                    
                    return   <div class="card md-6">
                                <div class="card-body">
                                    <h5 class="card-title">{data.title}</h5>
                                </div>
                            </div>           

                })
            }
          
        </div>
    );
}

export default GetToDo;