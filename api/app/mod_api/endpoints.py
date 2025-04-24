from flask import Blueprint
from flask_restx import Resource, Api


api_blueprint = Blueprint('api', __name__)
api = Api(api_blueprint)

sleep_data = [
  {
    "product": "Costa",
    "corrleation": "sleep duration",
    "coefficient": 0.97,
    "indicator": "low sleep",
    "metadata": {
      "xlabel": "Time (days)",
      "line1": "Sleep Duration",
      "line2": "Costa Purchases"
    },
    "line1": [
      {
        "x": "2025-04-17",
        "y": 7
      },
      {
        "x": "2025-04-18",
        "y": 8
      },
      {
        "x": "2025-04-19",
        "y": 5
      },
      {
        "x": "2025-04-20",
        "y": 4
      },
      {
        "x": "2025-04-21",
        "y": 9
      },
      {
        "x": "2025-04-22",
        "y": 7
      },
      {
        "x": "2025-04-23",
        "y": 7
      }
    ],
    "line2": [
      {
        "x": "2025-04-17",
        "y": 1
      },
      {
        "x": "2025-04-18",
        "y": 1
      },
      {
        "x": "2025-04-19",
        "y": 2
      },
      {
        "x": "2025-04-20",
        "y": 3
      },
      {
        "x": "2025-04-21",
        "y": 0
      },
      {
        "x": "2025-04-22",
        "y": 0
      },
      {
        "x": "2025-04-23",
        "y": 1
      }
    ]
  }
]

@api.route('/sleep')
class Sleep(Resource):
    def get(self):
        return sleep_data
    
comp_data = [
  {
    "category": "mindfulness",
    "difference": 15,
    "monetary_effect": "-15.30"
  },
  {
    "category": "mindfulness",
    "difference": -10,
    "monetary_effect": "8.45"
  }
]

@api.route('/mindfulness')
class Mindfullness(Resource):
    def get(self):
        return comp_data
    
bpm_data = [
  {
    "product": "Impulse Spending",
    "corrleation": "bpm variability",
    "coefficient": 0.92,
    "indicator": "?",
    "metadata": {
      "xlabel": "Time (days)",
      "line1": "Average BPM",
      "line2": "Impulse Spending"
    },
    "line1": [
      {
        "x": "2025-04-17",
        "y": 67
      },
      {
        "x": "2025-04-18",
        "y": 73
      },
      {
        "x": "2025-04-19",
        "y": 61
      },
      {
        "x": "2025-04-20",
        "y": 87
      },
      {
        "x": "2025-04-21",
        "y": 92
      },
      {
        "x": "2025-04-22",
        "y": 74
      },
      {
        "x": "2025-04-23",
        "y": 69
      }
    ],
    "line2": [
      {
        "x": "2025-04-17",
        "y": 10.43
      },
      {
        "x": "2025-04-18",
        "y": 11.27
      },
      {
        "x": "2025-04-19",
        "y": 8.64
      },
      {
        "x": "2025-04-20",
        "y": 17.92
      },
      {
        "x": "2025-04-21",
        "y": 27.84
      },
      {
        "x": "2025-04-22",
        "y": 21.53
      },
      {
        "x": "2025-04-23",
        "y": 13.21
      }
    ]
  }
]

@api.route('/bpm')
class BPM(Resource):
    def get(self):
        return bpm_data