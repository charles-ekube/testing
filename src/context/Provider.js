import React from 'react'
import { LeaderBoardData } from '../utils/Data'
import { LeaderBoardContext } from './Context'

const Provider = (props) => {
    const papa = '12321111'
    const todo = []
    return (
        <LeaderBoardContext.Provider value={{ LeaderBoardData, papa, todo }}>
            {props.children}
        </LeaderBoardContext.Provider>
    )
}

export default Provider