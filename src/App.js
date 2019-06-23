import React,{Component} from 'react';
import './App.css';
import PersonneForm from './component/PersonneForm'
import Navbar from './component/Navbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      filtre:0,
      personnes:[
        {
          id:1,
          nom:'sall',
          prenom:'abdoul',
          age:18
        },
        {          
          id:2,
          nom:'diop',
          prenom:'mamadou',
          age:40
        },
        {
          id:3,
          nom:'moussa',
          prenom:'kone',
          age:25
        }
      ]
    }
  }
  addPerson=(person)=>{
    person.id=this.state.personnes.length+1
    let personnes=[...this.state.personnes,person]
    this.setState({personnes:personnes})
  }
  setFilter=(e)=>{
    this.setState({filtre:e.target.value})
  }
  delPerson=(id)=>{
    let personnes= this.state.personnes.filter(perso=>{
     return perso.id !==id?perso:null
    })
    this.setState({personnes:personnes})
  }
  render(){
    return (
      <div className="App">
        <PersonneForm addPerson={this.addPerson}/>
        <input type="text" placeholder="Entrer l'age minimum" onChange={this.setFilter} />
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Age</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
           <Navbar personne={this.state.personnes} filtre={this.state.filtre} delete={this.delPerson}/>
          </tbody>
            
        </table>
        
      </div>
    )
  }
}

export default App;
