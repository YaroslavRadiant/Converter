import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ClearHistory} from '../../store/actions/converterActions'
import {getOldConversations} from '../../store/reducers/selectors'

const INITIAL_VALUE = 0

const OldConversationsTable = () => {
  const data = useSelector(getOldConversations)
  const dispatch = useDispatch()

  const handleClear = () => {
    dispatch(ClearHistory())
  }

  const getSum = () => {
    return data.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.convertedValue,
      INITIAL_VALUE
    )
  }

  return (
    <div className='bg-gray-100 rounded-lg p-4'>
      {!!data.length &&
        data.map((el, index) => (
          <div key={index} className='border-b border-gray-300 py-2'>
            <p>
              {el.startValue}
              {el.startValuta} {' ===> '}
              {el.convertedValue}
              {el.convertedValuta}
            </p>
          </div>
        ))}
      <div className='my-4'>
        <p className='font-bold'>
          Sum of all history: {getSum().toFixed(2)} USD
        </p>
      </div>
      {!!data.length && (
        <button
          onClick={handleClear}
          className='bg-red-500 text-white rounded-lg px-4 py-2'
        >
          Clear history
        </button>
      )}
    </div>
  )
}

export default OldConversationsTable
