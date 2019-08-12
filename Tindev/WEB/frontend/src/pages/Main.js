import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

    async function handleLike(id) {
        //o segundo parametro do post é o corpo
        await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id
            }
        })

        setUsers(users.filter(user => user._id !== id))
    }

    async function handDislike(id) {
        //o segundo parametro do post é o corpo
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: match.params.id
            }
        })

        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Tindev" />
            </Link>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            <div className="buttons">
                                <button type="button" onClick={() => handDislike(user._id)}>
                                    <img src={dislike} alt="dislike" />
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="like" />
                                </button>
                            </div>

                        </li>
                    ))}


                </ul>
            ) : (
                    <div className="empty"> Acabou :(</div>
                )}


        </div>

    );
}