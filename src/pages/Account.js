import React, { useState, useEffect } from 'react';


const Account = props => {
    const [msgs, setMsgs] = useState([]);
    const [text, setText] = useState('')
   
    useEffect(() => {
        if (messages.mensajeList)
            setMsgs(messages.mensajeList)
    });

    function handleTexting(e) {
        if (e.keyCode == 13) {
            sendMessage(text)
            setText('')

        }
    }
 
    return (

        <div className=''>

            <input type="text"
                name=""
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                onKeyDown={handleTexting}
            />

            <ul>
                {msgs ? msgs.map((item, i) => {
                    return (
                        <li key={i}>
                            {item}
                        </li>)
                }) : ''
                }
            </ul>

        </div>
    )

}
export default Account;