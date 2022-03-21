import { DateTime } from 'luxon';
// show date
elem.dateElem.innerText = new Date();
setInterval(() => {
  elem.dateElem.innerText = new Date();
}, 1000);
