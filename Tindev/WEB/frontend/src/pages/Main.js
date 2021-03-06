import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import api from '../services/api'
import dislike from "../assets/dislike.svg";
import itsamacth from "../assets/itsamatch.png";
import './Main.css';
//com esse match você tem acesso a todos os parametros passsados para esssa rota
export default function Main({ match }) {
    const [users, setUsers] = useState([]);
    const [matchDev, setMatchDev] = useState(null)
    //Conectando com a API
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
    //Configurando o websockt
    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user: match.params.id }
        });

        socket.on('match', dev => {
            setMatchDev(dev);
        })

    }, [match.params.id]);

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

            {matchDev && (
                <div className="match-container">
                    <img src={itsamacth} alt="It's a match"></img>
                    <img className="avatar" src={matchDev.avatar}></img>
                    <strong>{matchDev.name}</strong>
                    <p> {matchDev.bio}</p>
                    <button type="button" onClick={() => setMatchDev(null)}>FECHAR</button>
                </div>
            )}
        </div>

    );
}