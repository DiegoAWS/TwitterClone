import React from 'react';
import useSocketLogin from '../hooks/useSocketLogin'
import WelcomeBackground from '../assets/img/welcomBackground.jpg'
import LogingForm from '../components/LoginForm';

const Welcome = props => {

    const [logued, addUser] = useSocketLogin()

    function Acces(userName) {
        addUser(userName)


        props.history.push('/' + userName)
    }

    return (

        <div className='welcomePage'>

            <img className='WelcomeBackground'
                src={WelcomeBackground}
                alt=""
            />

            <div className='Form'>
                <LogingForm acces={Acces} />
            </div>

        </div>
    )

}
export default Welcome;