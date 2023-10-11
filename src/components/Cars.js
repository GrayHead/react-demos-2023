import {useSelector} from "react-redux";

const Cars = () => {
    const {cars} = useSelector(state => state.car);
    return (
        <div>
            {cars.map(car=><div key={car.id}>{car.brand}</div>)}
        </div>
    );
};

export {Cars};