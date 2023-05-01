import React, {useEffect} from 'react';
import styles from './create-card-form.module.css'
import {useState} from "react";
import {cars} from "../cars.data";

// eslint-disable-next-line react/prop-types
const ClearData = {price: '', name: '', image: ''}
const CreateCardForm = ({setCars}) => {
    const [data, setData] = useState({

    })
    const createCar = (e) => {
        e.preventDefault()

        setCars(prev => [{id : prev.length + 1, ...data} ,...prev,
        ])
        setData(ClearData)
    }
    useEffect(() => {
        console.log('Hey')
    }, [cars])


    return <form className={styles.form}>
        <input placeholder='Name'
               onChange={e =>
               setData(prev => ({...prev, name: e.target.value}))}
               value={data.name} />
        <input placeholder='Price'
        onChange={e =>
                setData(prev => ({...prev, price: e.target.value}))}
                value={data.price}
        />
        <input placeholder='Image'
               onChange={e => setData(prev =>({...prev,image: e.target.value}))}
               value={data.image}/>

        <button className='btn' onClick={e => createCar(e)}>Create</button>
    </form>
};

export default CreateCardForm;
