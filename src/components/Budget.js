import React, {  useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);}, 0);
    const setBudget= (event) =>{
        if(event.target.value>20000 ){
            alert("Budget can not exceed 20,000");
        }
        else if(event.target.value<totalExpenses){
            alert("Budget can not be lower than the spendings!")
        }
        else{
            dispatch({
                type:'SET_BUDGET',
                payload:event.target.value
            });
        }

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ size: 10}}
                        onChange={setBudget}>
                        </input></span>
        </div>
    );
};
export default Budget;


