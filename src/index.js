import { chart } from 'Highcharts';
import { fetchVisiologyData } from './api/visiologyBrowsers';
import { createConfigForChart } from './helpers/createConfig';
import './styles/styles.css';
import './styles/chart.css';

(function createContainer(){
  const container = document.createElement('div');
  container.id = 'container';
  container.className = 'chart';
  document.body.appendChild(container);
})();

fetchVisiologyData().then(visiologyData => {
  chart('container', createConfigForChart(visiologyData));
});
