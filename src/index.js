
import './style.css';
import './events.css';
import { setupInputs } from './inputs.js';

const userinputs = {
    name: null,
    title: null,
    hours: 0,
    bmtgs: null,
    omtgs: 0,
    mtgs: 0,
    pera: null,
    phone: null,
    internet: null,
    miles: 0,
    misc:0,
  }
  const datatables = {
    hours: [],
    miles: [],
    misc:  [],
    omtgs: [],
  }

setupInputs(userinputs, datatables);



