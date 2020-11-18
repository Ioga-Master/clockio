
import { formatAMPM } from './scripts/timecalulator';


const { remote, Renderer } = require('electron');
const { Menu } = remote;

const current_time_element = document.getElementById('current_time'); 

current_time_element.textContent = formatAMPM();

