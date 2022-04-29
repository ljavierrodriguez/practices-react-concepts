import { useContext, useEffect, useState } from 'react';
import { Context } from '../contexts/DarkModeContext';
import { AppContext } from '../store/appContext';

function Home() {
  /* 
  string
  number
  boolean
  undefined
  function
  Symbol
  BigInt

  object
    array
    null
    literal object

  
  */
 const { theme } = useContext(Context);
 const { store, actions} = useContext(AppContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState(10);
  const [errors, setErrors] = useState({});

  const [state, setState] = useState({
    name: '',
    age: 0,
    address: {
      street: '',
      city: ''
    },
    notes: [
      { id: 1, note: 'First Note' }
    ]
  })

  useEffect(() => {
    // componentDidMount
    console.log('El componente ha sido renderizado');

    console.log(theme);

    return () => {
      // componentWillUnmount
      console.log('El Componente va a ser eliminado');
    }
  }, [])

  useEffect(() => {
    // componentDidUpdate
    console.log("Ha Ocurrido un Cambio");

  }, [name]);

  const saludo = (evt, name) => {
    console.log(evt.type);
    setName(name);
  }

  const quitarVocales = () => {
    let entry = "";

    for (let i = 0; i < name.length; i++) {
      if (name[i].toLowerCase() !== "a" && name[i].toLowerCase() !== "e" && name[i].toLowerCase() !== "i" && name[i].toLowerCase() !== "o" && name[i].toLowerCase() !== "u") {
        entry += name[i];
      }
    }

    setName(entry);
  }


  const getData = (url, options) => {
    
  }

  const handleChange = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, enviar } = e.target;
    let errors = {};

    enviar.disabled = true;

    if (username.value === '') {
      errors['username'] = 'El username no puede estar vacio';
    }

    if (password.value === '') {
      errors['password'] = 'El password no puede estar vacio';
    } else if (!/^[a-zA-Z0-9@!-&*$?=]+$/.test(password.value)) {
      errors['password'] = 'El password solo puede contener numeros ';
    } else if(password.value === username.value){
      errors['password'] = 'El username y el password no pueden ser los mismos ';
    }

    if (errors.username || errors.password) {
      setErrors(errors);
      enviar.disabled = false;
    }else{
      setErrors(errors);
    }


  }

  const handleClick = (e) => {
    e.target.disabled = true;
  }

  return (
    <div className={"container " + theme}>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">
            {name} {store.name}
          </h1>
          <button className="btn btn-warning" onClick={() => setName('Aziel')}>
            Cambiar Nombre
          </button>
          <button className="btn btn-info" onClick={saludo}>
            Llamar a Saludo
          </button>
          <button className="btn btn-info" onClick={(evento) => saludo(evento, 'Luis')}>
            Llamar a Saludo
          </button>
          <input type="text" onChange={(evento) => saludo(evento, evento.target.value)} />

          <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
          <button onClick={quitarVocales}>
            Quitar Vocales
          </button>

          <form onSubmit={handleSubmit} className="w-50 p-5 my-5 mx-auto">
            <div className={"form-group mb-3"}>
              <input type="text" id="username" name='username' onChange={handleChange} placeholder='john.doe@gmail.com' className={'form-control ' + (errors.username ? "is-invalid" : "")} />
              <div id="validationServer03Feedback" className="invalid-feedback">
                {errors?.username}
              </div>
            </div>
            <div className={"form-group mb-3"}>
              <input type="password" id="password" name='password' onChange={handleChange} placeholder='************' className={'form-control ' + (errors.password ? "is-invalid" : "")} />
              <div id="validationServer03Feedback" className="invalid-feedback">
                {errors?.password}
              </div>
            </div>
            <button className="btn btn-primary" id='enviar' name="enviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;