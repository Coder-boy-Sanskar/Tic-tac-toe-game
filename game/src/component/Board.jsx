import React from 'react'
import Square from './Square'

const board = () => {
  return (
    <div className='board-container'>
    <div className='board-row'><Square/> <Square/> <Square/>
    
    
    </div>
    <div className='board-row'><Square/><Square/><Square/>
    
    </div>
    <div className='board-row'><Square/><Square/><Square/><Square/>
    
    </div>
    </div>
  )
}

export default board
