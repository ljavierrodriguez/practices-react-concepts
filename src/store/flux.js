const getState = ({ getStore, getActions, setStore }) => {
    return {
        // almacen de todos mis datos que quiero tener a nivel global
        store: {
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
                /* getActions().getUsers();
                const { getUsers } = getActions();
                getUsers(); */
            }
        }
    }
}

export default getState;