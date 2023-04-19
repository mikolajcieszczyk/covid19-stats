import moment from 'moment'
import React, { PureComponent, useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from 'recharts'

const fakeData = [
  {
    NewConfirmed: 100282,
    TotalConfirmed: 1162857,
    NewDeaths: 5658,
    TotalDeaths: 63263,
    NewRecovered: 15405,
    TotalRecovered: 230845,
  },
]

const StackedAreaChart = () => {
  const [correctData, setCorrectData] = useState<any[]>([])
  const [error, setError] = useState<Boolean>(false)

  const fetchData = async () => {
    const res = await fetch('https://api.covid19api.com/summary')

    try {
      const data = await res.json()
      const globalData = [data.Global]
      setCorrectData((oldData) => [...globalData])
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    console.log(correctData)
  }, [])

  return (
    <ResponsiveContainer width="100%" height="50%">
      {error || !correctData.length ? (
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      ) : (
        <BarChart
          width={500}
          height={300}
          data={correctData}
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
      )}
    </ResponsiveContainer>
  )
}

export default StackedAreaChart
