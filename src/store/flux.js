const getState = ({ getStore, getActions, setStore }) => {
    return {
        // almacen de todos mis datos que quiero tener a nivel global
        store: {
            characters: null,
            users: [],
            posts: [],
            news: [],
            name: 'Luis Rodriguez',
        },
        // almacen de todas las funcionalidades que quiero tener a nivel global
        actions: {
            getUsers: () => {
                // obtiene todos los usuarios usando fetch
                fetch("https://jsonplaceholder.typicode.com/users")
                    .then((response) => response.json())
                    .then((data) => setStore({ users: data }));
            },
            getPosts: () => {
                // obtiene todos los usuarios usando fetch
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then((response) => response.json())
                    .then((data) => setStore({ posts: data }));
            },
            getDataUSers: () => {
                getActions().getUsers();
                const { getUsers } = getActions();
                getUsers();
            },
            getFetchUser: () => {
                fetch('https://swapi.dev/api/people/')
                    .then(resp => resp.json())
                    .then(data => data)
                    .then(async data => {
                        const { results } = data;
                        /* results.forEach(async (character, index) => {
                            if (character.films) {
                                const responses = await Promise.all(character.films.map(response => fetch(response)));
                                const datos = await Promise.all(responses.map(response => response.json()))
                                data.results[index].films = datos;
                                setStore({ characters: data });
                            }
                        }); */
                        /* */
                        results.forEach(async (character, index) => {
                            const { films } = character;
                            films.forEach(async (film, i) => {
                                const resp = await fetch(film);
                                const info = await resp.json();
                                data.results[index].films[i] = info;
                                setStore({ characters: data });
                            });
                        });
                        
                    })
            }
        }
    }
}

export default getState;