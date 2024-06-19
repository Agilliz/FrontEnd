import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const GraficoLinha = ({ altura, dados }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = dados.map(item => item.hora);
    const data = dados.map(item => item.quantidade);

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
          name: 'Quantidade de Coletas',
          data: data
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
            return Math.round(value); // Arredonda para o inteiro mais próximo
          },
          style: {
            colors: '#8F8F8F'
          }
        },
        tickAmount: 5,
        min: 0,
        max: Math.max(...data) + 99, // Ajuste o máximo dinamicamente
        axisTicks: {
          show: true
        },
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [altura, dados]);

  return <div ref={chartRef}></div>;
};

export default GraficoLinha;
