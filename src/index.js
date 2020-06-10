// imports
import React from 'react'
import ReactDom from 'react-dom'
import { render } from '@testing-library/react'

// components

// Componentes funcionales
// const App = () => {
//     return <div></div>
// }   

// function App () {
//     return <div></div>
// }

// Componentes de clase
class App extends React.Component{
    constructor(){
        super()
    }
    

    render() {
        return <div> 
                    <h1>Hola</h1>
                    <h2>Mundo</h2>  
               </div>
    }
    
}


// render
ReactDom.render(<App></App>, document.querySelector('#root')

)