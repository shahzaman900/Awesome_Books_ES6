import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function displayDate() {
  const displayDate = document.getElementById('displayDate');
  const dt = DateTime.now();
  displayDate.innerHTML = `${dt}`;
}

setInterval(displayDate, 1000);

displayDate();