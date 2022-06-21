import './Button.css';

const Button = ({children, click}) => {
    return (  
        <button className='button' onClick={click}>
            {children}
        </button>
    );
}
 
export default Button;