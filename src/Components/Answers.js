import React from 'react';

const Answers = (props) => {
         return (
            <select className="form-control" required>
                <option hidden value="">Choose Here</option>
                     { 
                         props.options.map( (answer,i) =>
                         <option key={i} value={answer}>{answer}</option>
                     )}
                </select>          
        );  
    }

export default Answers;