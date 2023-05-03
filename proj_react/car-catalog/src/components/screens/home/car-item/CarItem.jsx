// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "../Home.module.css";

// eslint-disable-next-line react/prop-types
function CarItem( {car}) {
    return (
        // eslint-disable-next-line react/prop-types
        <div key={car.id} className={styles.item }>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }}
            />
            <div className={styles.inform}>
                <h2>{car.name}</h2>
                <p>{new Intl.NumberFormat('us-US', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'narrowSymbol',
                }).format(car.price)}</p>
                <button className={styles.butn}>Read more</button>
            </div>
        </div>
    );
}

export default CarItem;