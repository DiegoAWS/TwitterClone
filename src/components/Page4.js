import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'
const Page4 = props => {

    const [texto, setTexto] = useState('')
    const [mensajes, setMensajes] = useState([])



    useEffect(() => {
        let socketIO = io.connect('http://localhost:5000')
        socketIO.on('msg', data => {
            
            setMensajes(data.mensajeList)
        })
        return ()=>{
             console.log( 'CleanUP')
            
            socketIO.off()
           
            
        }
      

    }, [])

    function handleClickButton(e) {
          let socketIO = io.connect('http://localhost:5000')
        socketIO.emit("msg", {
            mensaje: texto
        })


        setTexto('')
    }


    return (

        <div className=''>

            <div className='Lista'>
                <input type="text" value={texto} onChange={e => { setTexto(e.target.value) }} />
                <input type="button" value="Send" onClick={handleClickButton} />

            </div>

            <ul className='Lista'>
                {mensajes.map((item, i) => {
                    return (
                        <li key={i}>
                            {item}
                        </li>
                    )

                })}
            </ul>
        </div>
    )

}
export default Page4;