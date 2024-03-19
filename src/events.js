import './events.css';

let myeventarray = [];
const Event = {
  date: "",
  description: "",
  amount: "0",
};

const doneButton = document.getElementById('doneButton');
const addButton = document.getElementById('addButton');
const cancelButton = document.getElementById('cancelButton');

if (doneButton) {doneButton.addEventListener('click', Done);}
if (cancelButton) {cancelButton.addEventListener('click', Cancel)};
if (addButton) {addButton.addEventListener('click', AddEntry)};

  //return from events to outputs
function Cancel() {
  window.history.back();
}
// save data and return
function Done () {
  SaveInputs();
  StoreInputs();
  //for (let key in localStorage) {console.log({key})};
  Cancel();
}
// save data
function SaveInputs()  {
    //const myevent = Object.create(Event);
    let myarray = [];
    myarray[0] = document.getElementById("day").value;
    myarray[1] = document.getElementById("description").value;
    const hrs = Number(document.getElementById("hr").value);
    console.log(hrs);
    const mins = Number(document.getElementById("min").value);
    myarray[2] = Number((hrs + mins).toFixed(2));
    myeventarray.push(myarray);
    console.log(myeventarray);
}
function StoreInputs() {
    for (let i = 0; i < myeventarray.length; i++)
      const myjson = JSON.stringify(myeventarray[i]);
      console.log({myjson});
      localStorage.setItem("mydata" + i, myjson);
    });
}
function AddEntry() {
  SaveInputs();
  document.getElementById("day").value = "";
  document.getElementById("description").value = "";
  document.getElementById("hr").value = 0;
  document.getElementById("min").value = 0;
}


