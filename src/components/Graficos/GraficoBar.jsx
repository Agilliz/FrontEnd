import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const GraficoBar = ({ data, altura, categories }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [{
                name: 'Quantidade',
                data: data
            }],
            chart: {
                type: 'bar',
                height: altura
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                    columnWidth: '25%'
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#FF5733'],
            xaxis: {
                categories: categories,
                labels: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                    }
                },
                tickAmount: 5,
                min: 0,
                max: Math.max(...data) + 4, // Ajuste o máximo dinamicamente
                axisTicks: {
                  show: true
                },
            },
            yaxis: {
                labels: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                    }
                }
            }
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, [data, altura, categories]);

    return <div ref={chartRef}></div>;
};

export default GraficoBar;
