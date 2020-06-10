import React from 'react'

class Regards extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <h1>Hola <b>{this.props.objectName.name}</b></h1>
            </div>
        )
    }
}

export default Regards