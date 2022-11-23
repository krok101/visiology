export const createConfigForChart = (response) => {
  const { series } = response.data;

  return {
    chart: { type: 'pie' },
    title: { text: 'Распределение рынка браузеров, 2021'},
    tooltip: { pointFormat: '<b>{point.percentage:.1f}%</b>' },
    accessibility: {
      point: { valueSuffix: '%' }
    },
    plotOptions: {
      pie: {
        cursor: 'pointer',
        dataLabels: false,
        showInLegend: true,
      },
    },
    series,
  };
};