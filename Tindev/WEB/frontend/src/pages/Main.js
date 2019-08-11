import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import api from '../services/api'
import dislike from "../assets/dislike.svg";
import './Main.css';
//com esse match você tem acesso a todos os parametros passsados para esssa rota
export default function Main({ match }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            })
            setUsers(response.data)
        }
        loadUsers();
    }, [match.params.id])
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name} />
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="dislike" />
                            </button>
                            <button type="button">
                                <img src={like} alt="like" />
                            </button>
                        </div>

                    </li>
                ))}


            </ul>


        </div>

    );
}