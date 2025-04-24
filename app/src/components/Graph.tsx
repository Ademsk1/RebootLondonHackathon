import { ScatterLine } from "plotly.js"
import React
  from "react"
import Plot from 'react-plotly.js'



const lines = (color: string): Partial<ScatterLine> => ({ shape: "spline", color: color })

const TimeGraph = () => {
  //

  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [4, 5, 6],
          mode: "lines+markers",
          type: "scatter",
          line: lines("blue")

        },
        {
          x: [1, 2, 3],
          y: [0, 5, 10],
          mode: "lines+markers",
          type: "scatter",
          line: lines("red")
        }
      ]
      }
      layout={
        {
          title: "title",
          xaxis: { title: "Day", showgrid: true },
          yaxis: { title: "Value", showgrid: true },
          legend: { orientation: "h", x: 0.5, xanchor: "center" },
          margin: { l: 40, r: 20, t: 40, b: 40 },

        }
      }
    />
  )
}

