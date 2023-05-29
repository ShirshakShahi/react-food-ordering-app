import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://react-meals-f2db4-default-rtdb.firebaseio.com/meals.json');
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
        }
        fetchData();
    }, []);


    const mealsList = meals.map(meal => <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />);

    return <Card className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </Card>

}

export default AvailableMeals;