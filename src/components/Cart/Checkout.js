import classes from './Checkout.module.css';

const Checkout = props => {

    const confirmHandler = (event) => {
        event.preventDefault();


    }

    return (<form onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
                type="text"
                id="name"
                autoComplete="OFF" />
        </div>
        <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <input
                type="text"
                id="street"
                autoComplete="OFF" />
        </div>
        <div className={classes.control}>
            <label htmlFor="postal">Postal Code</label>
            <input
                type="text"
                id="postal"
                autoComplete="OFF" />
        </div>
        <div className={classes.control}>
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                autoComplete="OFF" />
        </div>
        <button>Confirm</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>);
}

export default Checkout;