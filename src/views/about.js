import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/DarkModeContext";
import { AppContext } from "../store/appContext";

const About = () => {
    const { theme } = useContext(Context);
    const { store } = useContext(AppContext);

    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13]);
    const [pintas, setPintas] = ['spades', 'hearts', 'cubs', 'diamons'];

    const [card, setCard] = useState({
        numero: 1,
        pinta: 'spades'
    })

    const [nombre, setNombre] = useState("Maria Herrera");

    useEffect(() => {
        generateCard();
    }, []);


    const generateCard = () => {
        setCard({
            numero: numeros[Math.floor(Math.random() * numeros.length)],
            pinta: 'spades'
        })
    }

    return (
        <>
            <div className={"container " + theme}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>About</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            {
                                !!store.characters && 
                                store.characters.results.length > 0 &&
                                store.characters.results.map((character, index) => {
                                    return (
                                        <li key={index} className="list-group-item">
                                            {character.name}
                                            <ul>
                                                <h4>Peliculas</h4>
                                                { character.films && character.films.map((film, i) => <li key={i}>{film.title}</li>)}
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={{ width: '100px' }}>
                            <div className="card-body">
                                <span className={card.pinta}>{card.numero}</span>
                            </div>
                        </div>

                        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div class="card">
                            <img src="http://placehold.it/300x200" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img src="http://placehold.it/300x200" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img src="http://placehold.it/300x200" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;