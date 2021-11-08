import React from 'react';
import {Form} from "react-bootstrap";
import {FilterTask} from "../redux/actions";


function Filter() {
    const handleChange = (e) => FilterTask(e.target.value);
    return (
        <div >
            <Form className="filterr">
                <div>
                    <label>no filter</label>
                    <input type="radio" name="filter-tasks" value="no-filter" onChange={handleChange}/>
                </div>
                <div>
                    <label >completed</label>
                    <input type="radio" name="filter-tasks" value="done" onChange={handleChange}/>
                </div>
                <div>    
                    <label>not completed</label>
                    <input type="radio" name="filter-tasks" value="undone" onChange={handleChange}/>
                </div>    
                
            </Form>
            
        </div>
    )
}

export default Filter;
