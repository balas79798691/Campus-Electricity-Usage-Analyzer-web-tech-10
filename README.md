# Campus Electricity Usage Analyzer

## Problem Statement
College classrooms and laboratories consume electricity throughout the day, but unusual consumption may not be noticed without comparing meter readings.

## Objective
To analyze electricity meter readings and identify consumption patterns or unusually high usage.

## Features
- Add room-wise meter readings
- Calculate consumption between readings
- Calculate total usage
- Calculate average daily usage
- Identify highest usage
- Flag unusually high consumption

## Calculation
For consecutive readings from the same room:

```text
Energy Consumption = Current Meter Reading - Previous Meter Reading
```

A reading is flagged as unusually high when it exceeds 1.5 times the calculated average usage.

## Technologies
- HTML5
- CSS3
- JavaScript

## Project Structure
```text
campus-electricity-usage-analyzer/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## How to Run
Open `index.html` in a modern browser.

## Future Enhancements
- Chart.js visualization
- Monthly reports
- Room comparison
- Cloud database
- Automatic IoT meter integration
- Energy-saving recommendations
