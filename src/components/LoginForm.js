import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

const LogingForm = props => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        document.querySelector('.inputName').focus()
    }, []);

    function handleKey(e) {
        if (e.keyCode == 13) {
            props.acces(username)
        }
    }
    return (

        <div className='LogingForm'>

            <h1>User Name</h1>

            <input type="text"
                className='inputName'
                value={username}

                onChange={e => { setUsername(e.target.value) }}
                onKeyDown={handleKey}
            />

            <input className='inputButton'
                type="button"
                value="Acceso"
                onClick={(e) => { props.acces(username) }}
            />

        </div>
    )

}
export default LogingForm;