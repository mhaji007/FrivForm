import React from 'react'
import languageContext from '../contexts/languageContext';

class Button extends React.Component {

    static contextType = languageContext;

    state = {  }
    
    render() { 
        return ( 
        <button className="ui button primary">
            Submit
        </button>);
    }
}
 
export default Button;