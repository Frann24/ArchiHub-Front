import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { orderPosts } from '../../../../redux/slices/post/ordenAndFilterActions';
export default function Order() {
  
const [order, setOrder] = useState("default")
const {filterType} = useSelector(state=>state.post) ;
const dispatch = useDispatch();
useEffect(()=>{
dispatch(orderPosts(filterType,order)) 
},[filterType,order])


  return (
    <div>
        <select className="" defaultValue="default" name="order" id="order" onChange={(e) => setOrder(e.target.value)} >
          <option value="default">Default</option>
          <optgroup label="square_meters"></optgroup>
          <option value="small">Smallest to</option>
          <option value="large">Largest to</option>
          <optgroup label="year" ></optgroup>
          <option value="recent">Recent to</option>
          <option value="old">Old to</option>
        </select>
    </div>
  )
}
