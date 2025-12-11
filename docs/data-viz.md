
```markdown
# 📊 Data Visualization & Recharts Guide

## Introduction
Data visualization is crucial for any successful dashboard. We utilize Recharts, a simple and powerful charting library built with React, to render dynamic and interactive charts. This guide covers how to integrate Recharts, how to structure your data, and how to create a complex multi-series chart.

## 🛠️ Integration & Best Practices

### 1. Installation
Ensure Recharts is installed in your project:
```bash
npm install recharts
```

2. Best Practices

· Responsive Container: Always wrap charts in <ResponsiveContainer> </ResponsiveContainer> to ensure they scale correctly across different screen sizes and nested components.
· Theme Integration: Use props.theme.colors directly for chart colors to maintain theme consistency (Light/Dark Mode).
· Data Structure: Recharts prefers an array of objects where each object represents one data point (e.g., one month, one user).

🎯 Case Study: Sales & User Growth Chart

We will create a Composed Chart to display two different metrics (Sales Volume and New Customers) on the same X-axis, demonstrating complex data visualization.

Step 1: Prepare the Sample Data

For demonstration, we will use static data. In a real application, this data would come from your Zustand Store (e.g., useStore(s => s.getSalesData())).

File: src/charts/data/monthlyData.js

```javascript
// src/charts/data/monthlyData.js

export const monthlyData = [
  { name: 'Jan', Sales: 4000, Customers: 2400 },
  { name: 'Feb', Sales: 3000, Customers: 1398 },
  { name: 'Mar', Sales: 5500, Customers: 2800 },
  { name: 'Apr', Sales: 2780, Customers: 3908 },
  { name: 'May', Sales: 1890, Customers: 4800 },
  { name: 'Jun', Sales: 2390, Customers: 3800 },
  { name: 'Jul', Sales: 3490, Customers: 4300 },
  { name: 'Aug', Sales: 5200, Customers: 4500 },
  { name: 'Sep', Sales: 6000, Customers: 5000 },
  { name: 'Oct', Sales: 4500, Customers: 4200 },
  { name: 'Nov', Sales: 7000, Customers: 5500 },
  { name: 'Dec', Sales: 7500, Customers: 6000 },
];
```

## Step 2: Create the Composed Chart Component

This component will be created in the src/charts/ folder for better organization.

File: src/charts/SalesGrowthChart.jsx

```jsx
import React from 'react';
import { useTheme } from 'styled-components';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { monthlyData } from './data/monthlyData';
import Card from '../ui/components/Card'; // Assuming a reusable Card component

const SalesGrowthChart = ({ data = monthlyData }) => {
  const theme = useTheme(); // Access the global theme colors

  // Define colors based on the current theme (light or dark)
  const primaryColor = theme.colors.primary[500];
  const accentColor = theme.colors.success[500];
  const gridColor = theme.colors.border.light;
  const textColor = theme.colors.text.secondary;

  return (
    <Card title="Monthly Sales & User Growth" padding="20px">
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            {/* Grid Lines for readability */}
            <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />

            {/* X-Axis (Months) */}
            <XAxis dataKey="name" stroke={textColor} />

            {/* Y-Axis 1 (Left): Sales - Use a separate id for multiple axes */}
            <YAxis 
              yAxisId="sales" 
              orientation="left" 
              stroke={primaryColor}
              tickFormatter={(value) => `$${value / 1000}k`} // Format as $k
            />

            {/* Y-Axis 2 (Right): Customers - Use a separate id */}
            <YAxis 
              yAxisId="customers" 
              orientation="right" 
              stroke={accentColor}
            />

            {/* Tooltip for hover interaction */}
            <Tooltip 
              contentStyle={{ 
                backgroundColor: theme.colors.background.paper, 
                border: `1px solid ${gridColor}` 
              }}
            />

            {/* Legend to identify the series */}
            <Legend wrapperStyle={{ paddingTop: '10px' }} />

            {/* 1. Sales Metric (Area Chart) */}
            <Area
              yAxisId="sales"
              type="monotone"
              dataKey="Sales"
              fill={primaryColor}
              stroke={primaryColor}
              fillOpacity={0.3}
              dot={false}
            />

            {/* 2. Customers Metric (Line Chart) */}
            <Line
              yAxisId="customers"
              type="monotone"
              dataKey="Customers"
              stroke={accentColor}
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SalesGrowthChart;
```

Step 3: Usage in a Page Component

Place the chart in your main dashboard page.

File: src/pages/Dashboard.jsx

````jsx
// src/pages/Dashboard.jsx

import React from 'react';
import SalesGrowthChart from '../charts/SalesGrowthChart'; // Import the new chart
import styled from 'styled-components';

const DashboardContainer = styled.div`
 
`;

const Dashboard = () => {
  // You would fetch data here from Zustand if you were using live data
  
  return (
    <DashboardContainer>
      {/* ... Other Widgets ... */}
      
      {/* 👈 The Chart Component */}
      <SalesGrowthChart /> 
      
      {/* ... Other Widgets ... */}
    </DashboardContainer>
  );
};

export default Dashboard;
```

📈 Other Important Chart Types

While the Composed Chart is powerful, Recharts supports various essential chart types, each with its own use case.

· Bar Chart (<BarChart>, <Bar>)
  · Best Use Case: Comparing discrete data sets (e.g., sales by region).

---