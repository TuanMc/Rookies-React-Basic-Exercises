import React from "react";

export default class Home extends React.Component{
    render(){
        return(
            <h2 className="title">
                Welcome to {this.props.name}
            </h2>
        );
    }
}
