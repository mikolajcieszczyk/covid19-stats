import { useEffect } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from 'recharts'
import { useAppDispatch } from '../../redux/store/store'
import { useSelector } from 'react-redux'
import { fetchGlobalData } from '../../redux/slices/globalDataSlice'
import { IGlobalState } from '../../types/types'
fetchGlobalData

const StackedAreaChart = () => {
  const dispatch = useAppDispatch()
  const reduxState = useSelector((state: IGlobalState) => state)

  useEffect(() => {
    dispatch(fetchGlobalData())
  }, [])

  const data = [reduxState.data]

  return (
    <>
      <h2>Global Summary</h2>
      {reduxState.loading && !reduxState.error && <div>loading</div>}
      {!reduxState.loading && reduxState.error ? (
        <div>Error: {reduxState.error}</div>
      ) : null}
      {!reduxState.loading && Object.entries(reduxState.data).length ? (
        <ResponsiveContainer width="100%" height="50%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis type="number" domain={['dataMin', 'dataMax']} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Legend />
            <Bar dataKey="TotalConfirmed" fill="#82ca9d" />
            <Bar dataKey="NewConfirmed" fill="#8884d8" />
            <Bar dataKey="NewDeaths" fill="#ffc658" />
            <Bar dataKey="TotalDeaths" fill="#b55160" />
            <Bar dataKey="NewRecovered" fill="#50ba75" />
            <Bar dataKey="TotalRecovered" fill="#b5518a" />
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </>
  )
}

export default StackedAreaChart
