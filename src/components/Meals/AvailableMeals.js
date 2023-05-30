import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, seHttptError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            setIsLoading(true);
            const response = await fetch('https://react-meals-f2db4-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok) {
                throw new Error("Something went wrong!!!");
            }

            const data = await response.json();
            const DUMMY_MEALS = [];
            for (const key in data) {
                DUMMY_MEALS.push({
                    id: key,
                    description: data[key].description,
                    name: data[key].name,
                    price: data[key].price
                });
            }
            setMeals(DUMMY_MEALS);
            setIsLoading(false);
        }

        fetchData().catch((error)=> {
            setIsLoading(false);
            seHttptError(error.message);
        });

    }, []);

    if (isLoading) {
        return <section className={classes.MealsIsLoading}>
            <p>Loading...</p>
        </section>
    }

    const mealsList = meals.map(meal => <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />);

    return <Card className={classes.meals}>
        {httpError && <p className={classes.MealsError}>{httpError}</p>}
        <ul>
            {mealsList}
        </ul>
    </Card>

}

export default AvailableMeals;