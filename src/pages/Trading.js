import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import Chart from 'react-apexcharts';

function Trading() {
  const stockMarkets = [
    { name: 'MASI Index', symbol: 'MASI', color: '#c1272d' },
    { name: 'S&P 500', symbol: 'SPX', color: '#2E8B57' },
    { name: 'NASDAQ', symbol: 'IXIC', color: '#4169E1' },
    { name: 'DAX', symbol: 'GDAXI', color: '#FFD700' },
    { name: 'FTSE 100', symbol: 'FTSE', color: '#483D8B' },
    { name: 'Nikkei 225', symbol: 'N225', color: '#FF4500' },
    { name: 'Shanghai', symbol: 'SSEC', color: '#8B0000' },
    { name: 'CAC 40', symbol: 'FCHI', color: '#006233' },
    { name: 'Dubai FM', symbol: 'DFMGI', color: '#20B2AA' },
    { name: 'Hong Kong HSI', symbol: 'HSI', color: '#B22222' },
    { name: 'Saudi TASI', symbol: 'TASI', color: '#008B8B' },
    { name: 'Brazil IBOV', symbol: 'IBOV', color: '#9932CC' }
  ];

  const generateHistoricalData = (days = 30) => {
    const data = [];
    const now = new Date();
    for (let i = days; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      data.push({
        x: date,
        y: [
          Math.random() * 1000 + 6000, // Open
          Math.random() * 1000 + 6500, // High
          Math.random() * 1000 + 5500, // Low
          Math.random() * 1000 + 6000  // Close
        ]
      });
    }
    return data;
  };

  const [chartsData, setChartsData] = useState({});

  useEffect(() => {
    // Initialize with 30 days of historical data
    const initialData = {};
    stockMarkets.forEach(market => {
      initialData[market.symbol] = {
        series: [{
          data: generateHistoricalData()
        }]
      };
    });
    setChartsData(initialData);

    // Update charts every few seconds
    const intervals = stockMarkets.map(market => {
      return setInterval(() => {
        setChartsData(prev => ({
          ...prev,
          [market.symbol]: {
            series: [{
              data: [...prev[market.symbol].series[0].data.slice(-29), {
                x: new Date(),
                y: [
                  prev[market.symbol].series[0].data.slice(-1)[0].y[3], // Last close as new open
                  prev[market.symbol].series[0].data.slice(-1)[0].y[3] * (1 + Math.random() * 0.02), // High
                  prev[market.symbol].series[0].data.slice(-1)[0].y[3] * (1 - Math.random() * 0.02), // Low
                  prev[market.symbol].series[0].data.slice(-1)[0].y[3] * (1 + (Math.random() - 0.5) * 0.02) // Close
                ]
              }]
            }]
          }
        }));
      }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const chartConfig = (market) => ({
    options: {
      chart: {
        type: 'candlestick',
        animations: {
          enabled: true,
          easing: 'easeinout',
          dynamicAnimation: {
            speed: 1000
          }
        },
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        }
      },
      title: {
        text: market.name,
        align: 'left',
        style: {
          color: market.color,
          fontSize: '16px',
          fontWeight: 'bold'
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeFormatter: {
            year: 'yyyy',
            month: 'MMM \'yyyy',
            day: 'dd MMM',
            hour: 'HH:mm'
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: true
        },
        labels: {
          formatter: (value) => `${value.toFixed(2)}`
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: market.color,
            downward: '#ff0000'
          }
        }
      },
      tooltip: {
        theme: 'light',
        x: {
          format: 'dd MMM yyyy HH:mm'
        }
      }
    }
  });

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
        Global Market Watch | مراقبة الأسواق العالمية
      </Typography>
      <Grid container spacing={3}>
        {stockMarkets.map((market) => (
          <Grid item xs={12} md={6} lg={4} key={market.symbol}>
            <Card sx={{ 
              height: '100%',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease'
              }
            }}>
              <CardContent>
                {chartsData[market.symbol] && (
                  <Chart
                    options={chartConfig(market).options}
                    series={chartsData[market.symbol].series}
                    type="candlestick"
                    height={300}
                  />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Trading;
