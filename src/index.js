
import './style.css';
import { setupInputs } from './inputs.js';

const userinputs = {
    name: "-",
    title: "-",
    hours: 0,
    bmtgs: 0,
    omtgs: 0,
    mtgs: 0,
    pera: 0,
    phone: 0,
    internet: 0,
    miles: 0,
    misc:0,
  }
  const datatables = {
    hours: { data: []},
    miles: { data: []},
    misc:  { data: []},
    omtgs: { data: []},
  }

setupInputs(userinputs, datatables);



