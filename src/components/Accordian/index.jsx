import React from 'react'
import { useState } from 'react'
import data from './data'
import  "./styles.css";
function Accordian() {
const [selected, setSelected] = useState(null)
const [enableMultiSelection, setEnableMultiSelection] = useState(false)
const [multiple, setMultiple] = useState([])

function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId)
}
function handleMultipleSelection(currentId) {
    let copyMultiple = [...multiple]
    const findCurrentIndex = copyMultiple.indexOf(currentId)

    if( findCurrentIndex === -1) copyMultiple.push(currentId)
    else copyMultiple.splice(findCurrentIndex, 1)

    setMultiple(copyMultiple)
}
console.log(selected)
  return (
    <div className='wrapper'>
        <button onClick={() => {
            setEnableMultiSelection(!enableMultiSelection) 
            setSelected(null)
        }} >{enableMultiSelection ? "Disable Multi Selection" :"Enable Multi Selection"}</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map((dataItem) => (
                        <div className="item">
                            <div
                             onClick={
                                enableMultiSelection ?
                                () => handleMultipleSelection(dataItem.id)
                                :
                                () => handleSingleSelection(dataItem.id)
                            }
                             className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                (selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ) ?
                                <div className="content">
                                    {dataItem.answer}
                                </div>
                                :
                                null
                            }
                        </div>
                    ))
                :
                <div>No data Found</div>
            }
        </div>
    </div>
  )
}

export default Accordian