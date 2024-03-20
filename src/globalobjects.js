let userinputs = {
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
 let showdiv = {
   hours: false,
   miles: false,
   misc: false,
   omtgs: false,
 }
 let datatables = {
   hours: { data: []},
   miles: { data: []},
   misc:  { data: []},
   omtgs: { data: []},
 }
 function setShowdiv(mykey, myvalue) {
    console.log ({mykey}, {myvalue});
    Object.keys(showdiv).forEach((item) => {
      if (item === mykey) {
        showdiv[item] = myvalue;
        console.log(showdiv[item]);
      }
    });
 }
 function getShowdiv(mykey){
  Object.keys(showdiv).forEach((item) => {
    if (item === mykey) {
      console.log({item});
      console.log(showdiv[item]);
      return showdiv[item];
    }
  });
 }
 function setUserinputs(mykey, myvalue) {
  for (const[key, value] of Object.entries(userinputs)) {
    if (key === mykey) {
      value = myvalue
    }
  };
}
function setDatatables(mykey, myvalue) {
  for (const[key, value] of Object.entries(userinputs)) {
    if (key === mykey) {
      value = myvalue
    }
  };
}
export {userinputs, setUserinputs, showdiv, setShowdiv, getShowdiv, datatables, setDatatables};