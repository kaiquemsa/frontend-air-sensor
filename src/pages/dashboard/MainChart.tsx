// @ts-nocheck
import React, { useEffect, useState, useRef } from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'
import getPredictions from '../../services/getPredictions'
import getSensors from '../../services/getSensors'

const MainChartAirQuality: React.FC<{ selectedPeriod: string }> = ({ selectedPeriod }) => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const data = await getPredictions.getAllPredictions();
        setPredictions(data);
        localStorage.setItem('predictions', JSON.stringify(data));
        localStorage.setItem('predictions_last_updated', new Date().toISOString());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const predictionsData = localStorage.getItem('predictions');
    const lastUpdated = localStorage.getItem('predictions_last_updated');
    const oneDayAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    const predictionsDataIsFresh = lastUpdated && new Date(lastUpdated) > oneDayAgo;

    if (predictionsData && predictionsDataIsFresh) {
      setPredictions(JSON.parse(predictionsData));
      setLoading(false);
    } else {
      fetchPredictions();
    }
  }, []);

  useEffect(() => {
    switch (selectedPeriod) {
      case '1 Day':
        setData(predictions.map((prediction) => prediction.co2_prediction_in_1_day));
        break;
      case '7 Days':
        setData(predictions.map((prediction) => prediction.co2_prediction_in_7_days));
        break;
      case '30 Days':
        setData(predictions.map((prediction) => prediction.co2_prediction_in_30_days));
        break;
      default:
        setData([]);
    }
  }, [selectedPeriod, predictions]);

  const timestamps = predictions.map((prediction) => prediction.timestamp);
  const formattedDates = timestamps.map((timestamp) => {
    return new Date(timestamp).toLocaleDateString("pt-BR", {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : predictions.length > 1 ? (
        <CChartLine
          style={{ height: '300px', marginTop: '40px' }}
          data={{
            labels: formattedDates,
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .1)`,
                borderColor: getStyle('--cui-info'),
                pointHoverBackgroundColor: getStyle('--cui-info'),
                borderWidth: 2,
                data: data,
                fill: true,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                  drawOnChartArea: false,
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
              y: {
                beginAtZero: true,
                border: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                max: 800,
                ticks: {
                  color: getStyle('--cui-body-color'),
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(800 / 5),
                },
              },
            },
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
          }}
        />
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};

const MainChartMoinsture: React.FC<{ selectedPeriod: string }> = ({ selectedPeriod }) => {
  const [sensors, setSensors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSensors = async () => {
      try {
        const data = await getSensors.getAllSensors();
        setSensors(data);
        localStorage.setItem('sensors', JSON.stringify(data));
        localStorage.setItem('sensors_last_updated', new Date().toISOString());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const sensorsData = localStorage.getItem('sensors');
    const lastUpdated = localStorage.getItem('sensors_last_updated');
    const oneDayAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    const sensorsDataIsFresh = lastUpdated && new Date(lastUpdated) > oneDayAgo;

    if (sensorsData && sensorsDataIsFresh) {
      setSensors(JSON.parse(sensorsData));
      setLoading(false);
    } else {
      fetchSensors();
    }
  }, []);

  useEffect(() => {
    switch (selectedPeriod) {
      case 'Umidade':
        setData(sensors.map((sensor) => sensor.api_humidity));
        break;
      case 'Temperatura':
        setData(sensors.map((sensor) => sensor.api_temperature));
        break;
      case 'Valor Bruto':
        setData(sensors.map((sensor) => sensor.raw_sensor_value));
        break;
      default:
        setData([]);
    }
  }, [selectedPeriod, sensors]);

  const timestamps = sensors.map((sensor) => sensor.timestamp)
  const formattedDates = timestamps.map(timestamp => {
    return new Date(timestamp).toLocaleDateString("pt-BR", {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  });


  return (
    <>
      <CChartLine
        style={{ height: '300px', marginTop: '40px' }}
        data={{
          labels: formattedDates,
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .1)`,
              borderColor: getStyle('--cui-info'),
              pointHoverBackgroundColor: getStyle('--cui-info'),
              borderWidth: 2,
              data: data,
              fill: true,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle('--cui-border-color-translucent'),
                drawOnChartArea: false,
              },
              ticks: {
                color: getStyle('--cui-body-color'),
              },
            },
            y: {
              beginAtZero: true,
              border: {
                color: getStyle('--cui-border-color-translucent'),
              },
              grid: {
                color: getStyle('--cui-border-color-translucent'),
              },
              max: 800,
              ticks: {
                color: getStyle('--cui-body-color'),
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },
        }}
      />
    </>
  )
}

export { MainChartAirQuality, MainChartMoinsture }
