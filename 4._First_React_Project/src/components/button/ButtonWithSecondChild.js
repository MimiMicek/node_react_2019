import React from 'react';

export default class ButtonWithSecondChild extends React.Component{
    render(){

        const {children} = this.props;

        return(
            <button>{children}</button>    
        )
    }
}