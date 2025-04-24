'use client'

import dynamic from 'next/dynamic'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

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

interface PlotGraphProps {
  data: GraphData
}

export default function PlotGraph({ data }: PlotGraphProps) {
  return (
    <div className="flex-1 w-full">
      <Plot
        data={[
          {
            x: data.line1.map(point => point.x),
            y: data.line1.map(point => point.y),
            name: data.metadata.line1,
            mode: "lines+markers",
            type: "scatter",
            line: { shape: "spline", color: "blue" }
          },
          {
            x: data.line2.map(point => point.x),
            y: data.line2.map(point => point.y),
            name: data.metadata.line2,
            mode: "lines+markers",
            type: "scatter",
            line: { shape: "spline", color: "red" }
          }
        ]}
        layout={{
          title: '',
          xaxis: { title: data.metadata.xlabel },
          yaxis: { title: "Value" },
          legend: {
            orientation: "h",
            y: -0.2,
            x: 0.5,
            xanchor: "center",
            yanchor: "top"
          },
          margin: { l: 40, r: 20, t: 20, b: 60 },
          height: 200,
          width: undefined,
          autosize: true
        }}
        config={{
          displayModeBar: false,
          responsive: true
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
} 