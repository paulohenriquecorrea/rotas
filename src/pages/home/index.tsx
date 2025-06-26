import {Link} from 'react-router-dom'
export function Home(){ 
    return(
        <>
            <h1>Bem vindo a Home</h1>
            <span>Essa é a minha primeira página com navegação</span>
            <br />
            <Link to={'/sobre'}>Sobre</Link><br />
            <Link to={'/contato'}>Contato</Link>
        </>
    )
}