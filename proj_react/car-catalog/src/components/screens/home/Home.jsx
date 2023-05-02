import styles from  './Home.module.css'
import {cars as carsData} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import CreateCardForm from "./create-card-forms/CreateCardForm.jsx";
import { useState} from "react";

function Home() {
    const [cars, setCars] = useState(carsData)

    return (
        <div className={styles.card}>
            <div className={styles.title}>
            <h1>Cars Catalog</h1>
                <p className={styles.input}>Оставьте ваши контактные данные</p>
                <div>
                    <CreateCardForm setCars={setCars}/>
                </div>
            {
                cars.length ? cars.map(car =>
                        <CarItem key={car.id}  car={car} />
                    )
                : <p>No cars</p>
            }
        </div>
        </div>
    );
}

export default Home;