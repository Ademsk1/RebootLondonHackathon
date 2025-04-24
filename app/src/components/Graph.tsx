'use client'

import { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'

interface DataPoint {
  x: string
  y: number
}

interface GraphData {
  product: string
  correlation: string
  coefficient: number
  indicator: string
  metadata: {
    xlabel: string
    line1: string
    line2: string
  }
  line1: DataPoint[]
  line2: DataPoint[]
}

const TimeGraph = () => {
  const [sleepData, setSleepData] = useState<GraphData | null>(null)
  const [bpmData, setBpmData] = useState<GraphData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sleepResponse, bpmResponse] = await Promise.all([
          fetch('http://localhost:9090/api/sleep'),
          fetch('http://localhost:9090/api/bpm')
        ])

        const [sleepJson, bpmJson] = await Promise.all([
          sleepResponse.json(),
          bpmResponse.json()
        ])

        setSleepData(sleepJson[0])
        setBpmData(bpmJson[0])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      {sleepData && (
        <Plot
          data={[
            {
              x: sleepData.line1.map(point => point.x),
              y: sleepData.line1.map(point => point.y),
              name: sleepData.metadata.line1,
              mode: "lines+markers",
              type: "scatter",
              line: { shape: "spline", color: "blue" }
            },
            {
              x: sleepData.line2.map(point => point.x),
              y: sleepData.line2.map(point => point.y),
              name: sleepData.metadata.line2,
              mode: "lines+markers",
              type: "scatter",
              line: { shape: "spline", color: "red" }
            }
          ]}
          layout={{
            title: `Sleep vs ${sleepData.product} (Correlation: ${sleepData.coefficient})`,
            xaxis: { title: sleepData.metadata.xlabel },
            yaxis: { title: "Value" },
            legend: { orientation: "h", x: 0.5, xanchor: "center" },
            margin: { l: 40, r: 20, t: 40, b: 40 }
          }}
        />
      )}

      {bpmData && (
        <Plot
          data={[
            {
              x: bpmData.line1.map(point => point.x),
              y: bpmData.line1.map(point => point.y),
              name: bpmData.metadata.line1,
              mode: "lines+markers",
              type: "scatter",
              line: { shape: "spline", color: "blue" }
            },
            {
              x: bpmData.line2.map(point => point.x),
              y: bpmData.line2.map(point => point.y),
              name: bpmData.metadata.line2,
              mode: "lines+markers",
              type: "scatter",
              line: { shape: "spline", color: "red" }
            }
          ]}
          layout={{
            title: `BPM vs ${bpmData.product} (Correlation: ${bpmData.coefficient})`,
            xaxis: { title: bpmData.metadata.xlabel },
            yaxis: { title: "Value" },
            legend: { orientation: "h", x: 0.5, xanchor: "center" },
            margin: { l: 40, r: 20, t: 40, b: 40 }
          }}
        />
      )}
    </div>
  )
}

export default TimeGraph

