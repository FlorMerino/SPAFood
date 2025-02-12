import React from "react";
import { useDispatch } from "react-redux"
import { filterByDiet} from "../../redux/actions"
import styles from '../flter&order/filter&order.module.css'

export default function FilterDiet({setPage}){

    const dispatch = useDispatch()
    
    function handleFilter(e) {
        dispatch(filterByDiet(e.target.value));
        setPage(1);
    }

    return (  
        <select class="form-select" aria-label="Default select example" onChange={e => handleFilter(e)} className={styles.filters}>
            <option value="all">All Diets</option>
            <option value="gluten free">Gluten Free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value='lacto ovo vegetarian'>Lacto ovo Vegetarian</option>
            <option value='lacto ovo vegetarian'>Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="fodmap friendly">Fodmap Friendly</option>
            <option value="whole 30">Whole 30</option>
            <option value="dairy free">Dairy Free</option>
        </select>
    )
}