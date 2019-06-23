import  React  ,{Component} from 'react'
export default class Navbar extends Component{
    render(){
        return this.props.personne.map(perso=>{
            
            return this.props.filtre <= perso.age ? (
                <tr key={perso.id}>
                    <td>{perso.nom}</td>
                    <td>{perso.prenom}</td>
                    <td>{perso.age}</td>
                    <td><button onClick={()=>{this.props.delete(perso.id)}} >Supprimer</button></td>
                </tr>
            ):null
            
            
        })
        
    }
}