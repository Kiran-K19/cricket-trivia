import React from "react";
import questionnaire from "../Data";
import Answers from "./Answers";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm(e) {
    e.preventDefault();
    document.getElementById("quizForm").reset();
  }

  handleSubmit(e) {
    e.preventDefault(); 
    alert("you have submitted the form");
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="quizForm">
        <div className="wrapper">
          { 
            questionnaire.questions.map(value => (
            <div className="question-content">
              <label>{value.question}</label>
              <div className="answer-options">
                <Answers options={value.answers} id={value.id} />
              </div>
            </div>
            ))}
           <div className="buttons-section">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.clearForm}>
              Clear
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Questions;
