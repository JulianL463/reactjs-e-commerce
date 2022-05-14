import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth'
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase/firebase'
import { UserContext } from '../../context/UserContext'
import {toast} from 'react-hot-toast'

const UserNav = ({className}) => {

    const { user, saveUser } = useContext(UserContext);

    const [newUser, setNewUser] = useState({});

    const [signInReg, setSignInReg] = useState(0);

    const [showGreeting, setShowGreeting] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
        setNewUser(currentUser);
    });

    useEffect(() => {
        if (newUser && Object.keys(newUser).length !== 0) {
            setShowGreeting(true);
            saveUser(newUser.email.split('@')[0], newUser.email);
        } else {
            saveUser('', '');
        }

    }, [newUser]);

    const login = async (ev) => {
        ev.preventDefault();


        try {
            await signInWithEmailAndPassword(auth, ev.target.email.value, ev.target.password.value);
        } catch (error) {
            toast.error('email o contraseña incorrectos', {
                position: 'bottom-right',
                style: {
                    borderRadius: '5px',
                    background: '#fff',
                    color: '#000000',
                },
            });
            
        }
    }

    const logout = () => {
        signOut(auth);
        setShowGreeting(false);
    }

    const toggleSignInReg = () => {
        setSignInReg(!signInReg);
    }

    const register = async (ev) => {

        ev.preventDefault();


        try {
            await createUserWithEmailAndPassword(auth, ev.target.email.value, ev.target.password.value);
        } catch (error) {
            toast.error('El email ya está registrado', {
                position: 'bottom-right',
                style: {
                    borderRadius: '5px',
                    background: '#fff',
                    color: '#000000',
                },
            });
        }

    }

    return (
        <div className={className}>
            {showGreeting ? <><h3>Bienvenid@ {user.name}</h3> <button onClick={logout}>Cerrar sesión</button></>
            : signInReg ? <div>
                <form action="" onSubmit={register}>

                    <input className='' placeholder='Email...' type="email" name='email' required />

                    <input className='' type="password" placeholder='Contraseña...' name='password' required />

                    <input className='inputButton' type="submit" value="Registrar" />

                </form>
                <button onClick={toggleSignInReg}>Ya tengo cuenta</button>
            </div >
            : <div>
                <form action="" onSubmit={login}>

                    <input className='' placeholder='Email...' type="email" name='email' required />

                    <input className='' type="password" placeholder='Contraseña...' name='password' required />

                    <input className='inputButton' type="submit" value="Ingresar" />

                </form>
                <button onClick={toggleSignInReg}>Quiero registrarme</button>
            </div>}

            
        </div>
    )
}

export default UserNav