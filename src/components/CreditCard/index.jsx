import { useRef } from 'react';
import './style.css';
import { useEffect } from 'react';

const CreditCard =() => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const focusNextInput = (input) => {
       input.nextSibling.focus();
       
    }

    const handleChange = (event) => {
        if (event.target.id !== "input4") {
            (event.target.value).length === 4 && focusNextInput(event.target);
        } else {
            (event.target.value).length === 4 && event.target.blur();
        }
        
    }


    return(
        <div className="credit-card">
            <h2>Zadejte číslo kreditní karty:</h2>
            <form>
                <input type="text" id='input1' onChange={(e) => handleChange(e)} ref={inputRef}/>
                <input type="text" id='input2' onChange={(e) => handleChange(e)}/>
                <input type="text" id='input3' onChange={(e) => handleChange(e)}/>
                <input type="text" id='input4' onChange={(e) => handleChange(e)}/>
            </form>
        </div>
    )
}

export default CreditCard;