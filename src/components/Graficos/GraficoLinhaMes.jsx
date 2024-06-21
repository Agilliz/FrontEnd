import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const GraficoLinha = ({ data, altura }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = data.map(item => item.mes);
    const seriesData = data.map(item => item.qtdEntregas);

    const options = {
      chart: {
        height: altura,
        width: '100%',
        type: 'area',
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 200
              }
            }
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 250
              }
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: 'Quantidade de Entregas',
          data: seriesData
        }
      ],
      stroke: {
        width: 2,
        colors: ['#2C2D5B']
      },
      fill: {
        colors: ['#3d3e6c']
      },
      xaxis: {
        categories: labels,
        labels: {
          style: {
            colors: '#8F8F8F'
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return Math.floor(value);
          },
          style: {
            colors: '#8F8F8F'
          }
        },
        tickAmount: 4,
        min: 0,
        max: Math.max(...seriesData) + 10, // Ajuste o máximo dinamicamente
        axisTicks: {
          show: true
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data, altura]);

  return <div ref={chartRef}></div>;
};

export default GraficoLinha;
