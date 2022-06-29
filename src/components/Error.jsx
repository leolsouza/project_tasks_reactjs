import './Loading.css'

const Error = () => {
    return ( 
        <div className='spinner-container'>
            <p style={{textAlign : "center"}}>Não foi possível carregar a aplicação, por favor verifique se o servidor está ativo.</p>
        </div>
     );
}
 
export default Error;