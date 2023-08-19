import React, {  useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = ()=>{
    const {dispatch, currency}= useContext(AppContext);
    const setCurren= (event)=>{
        switch(event.target.value){
            case "dollar":
                dispatch({
                    type:'CHG_CURRENCY',
                    payload:'$'
                });
                break;
            case "pound":
                    dispatch({
                        type:'CHG_CURRENCY',
                        payload:'£'
                    });
                    break;
            case "euro":
                    dispatch({
                        type:'CHG_CURRENCY',
                        payload:'€'
                    });
                    break;
            case "Ruppee":
                dispatch({
                    type:'CHG_CURRENCY',
                    payload:'₹'
                });
                break;
            default:
                dispatch({
                    type:'CHG_CURRENCY',
                    payload:'£'
                });
        }
    }
    const listStylee={backgroundColor:'green', color:'black',fontSize:'20px'}
    const optionStyle={backgroundColor:'lightgreen', color:'white',fontSize:'20px'}
    return(
        <div className='alert-alert-secondary'>
            <select className="options" id="listofcurrency" onChange={setCurren} style={listStylee} >
                            <option defaultValue>Currency{currency}</option>
                            <option value="dollar" name="dollar" style={optionStyle}> $ Dollar</option>
                            <option value="pound" name="pound" style={optionStyle}> £ Pound</option>
                            <option value="euro" name="euro" style={optionStyle}> € Euro</option>
                            <option value="Ruppee" name="Ruppee" style={optionStyle}>₹ Ruppee</option>
                      </select>
        </div>

)};

export default Currency;