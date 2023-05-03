import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CarService} from "../../../services/car.service.js";
import CarItem from "../home/car-item/CarItem.jsx";
const CarDetail = () => {
  const {id} = useParams(), [car, setCar] = useState();
  useEffect(() => {
    if(!id) return
    const fetchData = async () => {
      const data = await CarService.getById(id)

      setCar(data)
    }
    fetchData()
  },[id])

    return (
        <div>
          <CarItem car={car} />
        </div>
    )
}

export default CarDetail;
