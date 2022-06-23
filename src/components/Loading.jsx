import spinner from '../images/spinner.svg'
import './Loading.css'

const Loading = () => {
    return ( 
        <div className='spinner-container'>
            <img className='spinner' src={spinner} alt="Loading" />
            <p>Aguarde por favor, estamos carregando ...</p>
        </div>
     );
}

export default Loading;
