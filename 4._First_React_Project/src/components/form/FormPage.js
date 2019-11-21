import React from 'react';

export default class FormPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        }
    }
        
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    onSubmit = () => {
        const {firstName, lastName} = this.state;

        console.log(`Your first name ${firstName}.`);
        console.log(`Your last name ${lastName}.`);

        this.props.onUserSubmit({firstName, lastName})
    }
    
    render(){
       const {firstName, lastName} = this.state;
        return (
            <div>
                <input id="firstName" placeholder="First name" onChange={this.handleChange} value={firstName}/>
                <input id="lastName" placeholder="Last name" onChange={this.handleChange} value={lastName}/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}