import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {

        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumer = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumer < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumer);
    }


    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" input={{
            ref: amountInputRef,
            id: 'amount' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount(1 to 5).</p>}
    </form>
}


export default MealItemForm;
