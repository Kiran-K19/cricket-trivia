import React from 'react';
import questionnaire from "../Data";

class Answers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'Select One'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.target.value  
        })
      }
        render(){
        let reformattedArray = questionnaire.map(function(obj){
                    return obj.answerOptions;
        });
        //console.log(reformattedArray);
        let finalArr = reformattedArray.reduce(function(pres,curr){
                return pres.concat(curr);
            })
            //console.log(finalArr);
        return (
            <select value={this.props.value} onChange={this.handleChange} className="form-control" required>
            <option value="">Select one</option>
            { finalArr.map(function(finalres){
                return <option key={finalres.id}>{finalres}</option>
            })}
            </select>          
        );  
    }
}

export default Answers;