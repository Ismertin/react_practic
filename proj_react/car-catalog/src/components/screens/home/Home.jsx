import React from 'react'
import styles from  './Home.module.css'
import {cars} from "./cars.data.js";
import CarItem from "./car-item/CarItem.jsx";
import CreateCardForm from "./create-card-forms/CreateCardForm.jsx";

function Home() {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
            <h1>Cars Catalog</h1>
                <p className={styles.input}>Оставьте ваши контактные данные</p>
                <div>
                    <CreateCardForm/>
                </div>
        </div>
            {
                cars.length ? cars.map(car => <CarItem key={car.id}  car={car} />
                    )
                : <p>No cars</p>
            }

        </div>
    );
}

export default Home;