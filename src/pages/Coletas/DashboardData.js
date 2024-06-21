import ApexCharts from 'apexcharts';

export function inicializaGraficos() {
    // Gráfico linha custos
    const graficoLinhaOptions = {
        chart: {
            height: 140,
            width: '100%',
            type: "area",
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
                name: "Custo Total",
                data: [45, 52, 38, 45, 19, 23, 2]
            }
        ],
        stroke: {
            width: 2,
            colors: ['#2C2D5B']
        },
        fill: {
            colors: ['#3d3e6c'] // Altere essa cor para a cor desejada
        },
        xaxis: {
            categories: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho"
            ],
            labels: {
                style: {
                    colors: '#8F8F8F'
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + 'k';
                },
                style: {
                    colors: '#8F8F8F'
                }
            },
            tickAmount: 4,
            min: 0,
            max: 80,
            axisTicks: {
                show: true
            }
        }
    };
    

    const graficoLinha = new ApexCharts(document.querySelector("#chart-linha"), graficoLinhaOptions);
    graficoLinha.render();

    // Gráfico pie faturamento
   // Gráfico pie faturamento
   const graficoBarOptions = {
    series: [{
      name: 'Coletas',
      data: [40, 20, 20]
    }],
    chart: {
      type: 'bar',
      height: 130
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FF5733'], // Cor das barras
    xaxis: {
      categories: ["Coletas Realizadas", "Coletas Canceladas", "Coletas em Espera"],
      labels: {
        style: {
           // Cor das labels do eixo x
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
        }
      }
    },
    yaxis: {
      labels: {
        style: {
           // Cor das labels do eixo y
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
        }
      }
    }
  };


    const graficoBar = new ApexCharts(document.querySelector("#chart-bar"), graficoBarOptions);
    graficoBar.render();

    return [graficoLinha, graficoBar];
}
