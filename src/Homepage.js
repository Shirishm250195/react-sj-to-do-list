import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";

function Homepage(props) {
    return (
        <div className="flex-container md-3">
            <button className="btn btn-light"> <Link to="/GetToDo">Get To Do</Link> </button>

            <button className="btn btn-light" > <Link to="/InsertToDo">Insert To Do</Link> </button>
            
        </div>
    );
}

export default Homepage;