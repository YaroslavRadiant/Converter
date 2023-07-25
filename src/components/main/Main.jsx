import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import getValutasData from '../../API/api'
import {addCurrentValutasPrice} from '../../store/actions/converterActions'

import InputArea from '../inputArea/InputArea'
import CurrentValutasTable from '../currentValutasTable/CurrentValutasTable'
import OldConversationsTable from '../oldConversationsTable/OldConversationsTable'
import {getCurrentValutasPrice} from '../../store/reducers/selectors'

export default function Main() {
  const currentValutasPrice = useSelector(getCurrentValutasPrice)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!!currentValutasPrice) {
      const fetchData = async () => {
        try {
          const valutas = await getValutasData()
          dispatch(
            addCurrentValutasPrice({
              data: Object.values(valutas.data),
              meta: valutas.meta,
            })
          )
        } catch (err) {
          console.error('Error fetching weather data:', err)
        }
      }
      fetchData()
    }
    // I don`t want to add dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-screen-lg w-1/6 m-2 p-10 bg-blue-200 rounded-lg flex-shrink-0 h-[250px] w-[270px]'>
        <CurrentValutasTable />
      </div>
      <div className='max-w-screen-lg w-2/6 m-2 flex-grow'>
        <div className='p-10 bg-green-200 rounded-lg mb-4'>
          <InputArea />
        </div>
        <div className='p-10 bg-yellow-200 rounded-lg'>
          <OldConversationsTable />
        </div>
      </div>
    </div>
  )
}
