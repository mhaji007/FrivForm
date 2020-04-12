import React from 'react'
import languageContext from '../contexts/languageContext';

class Button extends React.Component {

    static contextType = languageContext;

    state = {  }

    render() { 
        const text = this.context === 'english' ? 'Submit': 'Voorleggen';
        return ( 
        <button className="ui button primary">
            {text}
        </button>);
    }
}
 
export default Button;