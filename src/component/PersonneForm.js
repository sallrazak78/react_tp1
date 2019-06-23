import React, { Component } from 'react'
export default class PersonneForm extends Component{
    constructor(props){
        super(props)
        this.state={
            nom:null,
            prenom:null,
            age:null
        }
    }
    setData=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addPerson(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="nom">Nom: </label>
                    <input type="text" id="nom" onChange={this.setData} />
                    <label htmlFor="prenom"> Prenom: </label>
                    <input type="text" id="prenom" onChange={this.setData} />
                    <label htmlFor="age"> Age: </label>
                    <input type="text" id="age" onChange={this.setData} />
                    <button >Ajouter</button>
                </form>
            </div>
        )
    }
}