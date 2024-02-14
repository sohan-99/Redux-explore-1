import {useDispatch, useSelector} from 'react-redux';
// this place incrementByValue is not comenig because you send not yet
import { decrement, increment, incrimentByVslue } from '../redux/feature/counter/counterSlice';

const Counter = () => {

   const {value} = useSelector((state) => state.counter);
   // console.log(value);
   const dispatch = useDispatch();
   return(
      <div>
         <h2 className='text-green-700 text-xl font-bold'>Counter</h2>
         {/*............. you must call increment ........... */}
         {/* next line payload is 5 */}
         <button className='text-sky-800 text-xl font-bold' onClick={()=> dispatch(incrimentByVslue(5))}>Increment by 5</button><br />

         <button className='text-purple-700 text-xl font-bold' onClick={()=> dispatch(increment())}>Increment</button>
         <div>
            <h1 className='text-red-700 text-xl font-bold'>{value}</h1>
         </div>
         <button className='text-blue-600 text-xl font-bold' onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
   );
};

export default Counter;