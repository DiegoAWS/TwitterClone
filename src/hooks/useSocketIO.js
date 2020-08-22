import { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client'

const useSocketIO = (userId) => {

    const [messages, setMessages] = useState([])
    const socketRef = useRef()

    const SERVER = 'http://localhost:5000/'
    const MSG = 'msg'



    useEffect(() => {
        socketRef.current = io.connect(SERVER, {
            query: { userId },
        })

        socketRef.current.on(MSG, (data) => {

            setMessages(data)
        })

        return () => {
            socketRef.current.disconnect()
        };
    }, [userId]);

    const sendMessage = (msgBody) => {

        socketRef.current.emit(MSG, msgBody)
    }



    return [messages, sendMessage]

}
export default useSocketIO;