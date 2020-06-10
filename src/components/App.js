// Imports Librerias
import React from 'react'

// Componentes
import Regards from './regards'

// components

// Componentes funcionales
// const App = () => {
//     return <div></div>
// }   

// function App () {
//     return <div></div>
// }

// Componentes de clase
export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'Mike',
            lastName: 'McCready'
        }

        this.changeState = this.changeState.bind(this);
    }

    changeState(objectName){
        this.setState(objectName)
    }
    

    render() {
        return <div> 
                    <Regards objectName={this.state} />

                    <button onClick={ () => this.changeState({name: 'Ismael', lastName: 'Castillo'})}>Ismael</button>
                    <button onClick={ () => this.changeState({name: 'Mike', lastName: 'McCready'})}>Mike</button>
                    <button onClick={ () => this.changeState({name: 'joe', lastName: 'Satriani'})}>Joe</button>
               </div>
    }
    
}