import React from 'react';
import styles from './create-card-form.module.css'
import {useState} from "react";

const CreateCardForm = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const createCar = (e) => {
        e.preventDefault()
        console.log({name,price,image})
    }

    return <form className={styles.form}>
        <input placeholder='Name'
               onChange={e =>
               setName(e.target.value)}
               value={name} />
        <input placeholder='Price'
        onChange={event =>
            setPrice(event.target.value)}
               value={price}
        />
        <input placeholder='Image'
               onChange={event => setImage(event.target.value)}
               value={image}/>

        <button className={styles.btn} onClick={e => createCar(e)}>Create</button>
    </form>
};

export default CreateCardForm;
