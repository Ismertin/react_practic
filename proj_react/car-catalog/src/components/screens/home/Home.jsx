import {CarService} from '../../../services/car.service';
import styles from  './Home.module.css'
import CarItem from "./car-item/CarItem.jsx";
import CreateCardForm from "./create-card-forms/CreateCardForm.jsx";
import { useEffect, useState} from "react";

function Home() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        const data = await CarService.getAll()

        setCars(data)
    }
    fetchData()
},[])

    return (
        <div className={styles.card}>
            <div className={styles.title}>
            <h1>Cars Catalog</h1>
                <p className={styles.input}>Оставьте ваши контактные данные</p>
                <div>
                    <CreateCardForm setCars={setCars}/>
                </div>
            {cars.length ? (
                cars.map(car => <CarItem key={car.id}  car={car} />
                    )
               ) : ( <p>No cars</p>
                )}
        </div>
        </div>
    );
        }

export default Home;