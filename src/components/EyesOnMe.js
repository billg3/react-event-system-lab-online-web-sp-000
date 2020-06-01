// Code EyesOnMe Component Here

import React from 'react';

class EyesOnMe extends React.Component {

    onFocus = () => console.log('Complete')

    onBlur = () => console.log('Entered')

    render() {
        return ( <
            button onFocus = { this.onFocus }
            onBlur = { this.onBlur } >
            Enter <
            /button>
        )
    }
}

export default EyesOnMe;