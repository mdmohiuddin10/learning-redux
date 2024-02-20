import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {
    const {count} = useSelector((state) => state.counter)
    console.log(count);
    const dispatch = useDispatch()

    return (
        <div className="flex gap-5 justify-center items-center">
            <button onClick={()=> dispatch(incrementByValue(5))} className="btn btn-accent">Increament by 5</button>
            <button onClick={()=> dispatch(increment())} className="btn btn-accent">Increament</button>
            <h2 className="text-3xl">{count}</h2>
            <button onClick={()=> dispatch(decrement())} className="btn btn-primary">Decreament</button>
        </div>
    );
};

export default Counter;