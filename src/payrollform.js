import {rates, jobs} from './constants.js';
import jsPDF from "jspdf";

const printButton = document.getElementById('printbutton');
printButton.addEventListener('click', PrintPDF);

  //print payroll form
function PrintPDF() {
  
  const doc = new jsPDF();

  // Add a title
  doc.text("Hello, PDF World!", 10, 10);

  // Add some text
  doc.text("This is a sample PDF generated using jsPDF.", 10, 25);

  // Add a line break
  doc.text("", 10, 35);  // Use an empty string for a newline

  // Add a list
  doc.text("List of items:", 10, 45);
  doc.text("- Item 1", 20, 55);
  doc.text("- Item 2", 20, 65);
  doc.text("- Item 3", 20, 75);

  // Save the PDF
  doc.save("my_first_pdf.pdf");
}

  function Calculate () {
    // set up the rates section
    for (let key in rates) {
      setupRates(key);
    };
    // determine job
    const my_job = UpdateJob();
    // get inputs 
    const salary = getSalary(my_job);
    const other = getValue("misc");
    const miles = getValue("miles");
    const mtgs = getValue("meetings");
    const internet = document.querySelector("input[name=internet]:checked").value;
    const phone = document.querySelector("input[name=cellphone]:checked").value;
    const peraValue = document.querySelector("input[name=pera]:checked").value;
    //console.log({salary},{other},{miles},{mtgs},{internet},{phone},{peraValue});
  }
  function setupRates(key) {
    const div = document.getElementById(key);
    let msg = key;
    switch(msg) {
        case "PERA":
            const PERApercent = rates.PERA.rate * 100.0;
            msg = `PERA ${PERApercent}%`;
            break;
        case "medicare":
            const medicarePercent = (rates.medicare.rate * 100.0).toFixed(2);
            msg = `medc ${medicarePercent}%`;
            break;
        case "mileage":
            msg = `\$${rates.mileage.rate}\/mi`;
            break;
        case "meetings":
            msg = `\$${rates.meetings.rate}\/mtg  `;
            break;
        case "internet":
            msg = `int \$${rates.internet.rate}\/qtr`;
            break;
        case "phone":
            msg = `ph \$${rates.phone.rate}\/qtr`;
            break;
        default:
            msg = 'uhoh';
    };
    div.textContent = msg;   
  };
  
  function putValue (myString, amt) {
    const div = document.getElementById(`${myString}`)
    div.textContent = sessionStorage.getItem(myString)
  }

  