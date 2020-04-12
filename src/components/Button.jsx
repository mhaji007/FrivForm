import React from 'react'
import languageContext from '../contexts/languageContext';

class Button extends React.Component {



    state = {  }

    render() { 
        
        return ( 
        <button className="ui button primary">
            <languageContext.Consumer>
                {(value)=>value === 'english' ? 'submit': 'Voorleggen'}
            </languageContext.Consumer>
        </button>);
    }
}
 
export default Button;