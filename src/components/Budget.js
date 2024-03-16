import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining, currency} = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);
        if (newBudgetValue < budget - remaining){
            console.log(remaining)
            alert('You cannot reduce the budget value lower tha the spending')
        } else{
            // setNewBudget(newBudgetValue);
        dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });}
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
