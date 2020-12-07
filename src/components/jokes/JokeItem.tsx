import React from 'react'

interface jokeObject {
    properties : {
        question?: string,
        joke: string
    }
}


class JokeItem extends React.Component<jokeObject>{
    render(){
        const paragrphStyle = {
            marginTop: 10,
        }
        return(
            <div className="JokeItem">
                <p style={paragrphStyle}>{this.props.properties.question}</p>        
                <p>{this.props.properties.joke}</p>
            </div>
        )
    }
}
export default JokeItem;