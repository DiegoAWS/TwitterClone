import { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client'

const useSocketLogin = () => {

    const [logued, setLogued] = useState(false)
    const socketRef = useRef()

    const SERVER = 'http://localhost:5000/login'
    const MSG = 'login'



    useEffect(() => {
        socketRef.current = io.connect(SERVER, {
            query: { 'user':'login' },
        })

        socketRef.current.on(MSG, (data) => {
            setLogued(data)
        })

        return () => {
            socketRef.current.disconnect()
        };
    }, []);

    const addUser = (msgBody) => {

        socketRef.current.emit(MSG, msgBody)
    }



    return [logued, addUser]

}
export default useSocketLogin;