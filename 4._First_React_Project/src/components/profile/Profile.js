import React from 'react';

class Profile extends React.Component {
    render() {
        console.log("111111 ", this.props.hobbies);
        return (
            <div>
                <p>     </p>
                <img src={this.props.img} />
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age} </div>
                <div>Hobbies: </div>
                {
                    this.props.hobbies.map((element) => {
                        return (<p>{element}</p>);
                    })
                }
            </div>
        );
    }
}

export default Profile;
