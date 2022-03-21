import { DateTime } from '../node_modules/luxon/src/luxon.js';
import elem from './domElements.js';

const displayTime = () => {
  elem.dateElem.innerText = DateTime.now().toFormat('FFF');
  setInterval(() => {
    elem.dateElem.innerText = DateTime.now().toFormat('FFF');
  }, 1000);
};
export default displayTime;
