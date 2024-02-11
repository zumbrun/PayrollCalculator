function updateJob() {
    let select = document.getElementById('job');
    let option = select.options[select.selectedIndex];
    let my_job = option.value.toLowerCase().replace(/\s/g, '');
    const div = document.querySelector("#hrs");
    if (my_job === "supervisor") {
      div.style.display = "block";
    }
    else {
      div.style.displa
    }
    return my_job;
  }
  //operator functions on most recent 2 numbers
  function sum (a,b) { return(a + b)};
  function subtract (a,b) {return(a - b)};
  function multiply (a,b) {return( a * b) };
  function divide (a,b) { b != 0 ? a / b : "Dividing by zero is not allowed."};
  
  //return from outputs to inputs
  function Cancel() {
    const inputs = document.querySelector(".inputs");
    inputs.style.display = "block";
    const outputs = document.querySelector(".outputs");
    outputs.style.display = "none";
  }
  //print payroll form
  function PrintPDF() {
    const jsPDF = require('jspdf');
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
  
  function CheckInputs()  {
    let field = "complete";
    //check all inputs are completed
    const hrsSV = getValue("hours");
    if (hrsSV===undefined){field="hours"};
    const mtgs = getValue("meetings");
    if (mtgs===undefined){field="meetings"};
    const other = getValue("misc");
    if (other===undefined){field="misc"};
    const miles = getValue("miles");
    if (miles===undefined){field="miles"};
    if (!document.querySelector("input[name=peraY]:checked")){field="PERA"};
    if (!document.querySelector("input[name=internetY]:checked")){field="internet"};
    if (!document.querySelector("input[name=phoneY]:checked")){field="phone"};
    
    if (field === "complete") {
      Calculate ();
    }
    else {
      alert(`Please complete the ${field}.`);
    }
  }
  
  function Calculate () {
    // set up the rates section
    for (let key in rates) {
      setupRates(key);
    };
    // determine job
    const my_job = updateJob();
    // get inputs 
    const salary = getSalary(my_job);
    const other = getValue("misc");
    const miles = getValue("miles");
    const mtgs = getValue("meetings");
    const internet = document.querySelector("input[name=internet]:checked").value;
    const phone = document.querySelector("input[name=phone]:checked").value;
    const peraValue = document.querySelector("input[name=pera]:checked").value;
    //console.log({salary},{other},{miles},{mtgs},{internet},{phone},{peraValue});
    
    // calculate intermediate outputs
    let wage = salary;
    if (my_job === "supervisor") {
      const hrsSV = getValue("hours");
      wage = multiply(hrsSV, salary);
    }
    const mtgAmt = multiply(mtgs, rates.meetings.rate );
    const phoneAmt = multiply(phone, rates.phone.rate);
    const internetAmt = multiply(internet, rates.internet.rate);
  
   // calculate outputs
    const totalWage = sum(wage, mtgAmt);
    let peraAmt = multiply(totalWage, rates.PERA.rate*peraValue);
    peraAmt = Math.round((peraAmt + Number.EPSILON) * 100) / 100;
    let medicareAmt = multiply(totalWage, rates.medicare.rate);
    medicareAmt = Math.round((medicareAmt + Number.EPSILON) * 100) / 100;
    const netAmt = subtract(totalWage, sum(peraAmt, medicareAmt));
    let milesAmt = multiply(miles, rates.mileage.rate);
    milesAmt = Math.round((milesAmt + Number.EPSILON) * 100) / 100;
    const phintAmt = sum(phoneAmt, internetAmt);
    const otherAmt = other;
    const payment = sum(netAmt, sum(sum(milesAmt, phintAmt), otherAmt));
    //console.log({totalWage},{peraAmt},{medicareAmt},{netAmt});
    //console.log({milesAmt},{phintAmt}, {otherAmt});
  
    const inputs = document.querySelector(".inputs");
    inputs.style.display = "none";
    const outputs = document.querySelector(".outputs");
    outputs.style.display = "flex";
    
    // assign outputs
    putValue("tw", totalWage);
    putValue("peraAmt",peraAmt);
    putValue("medicareAmt", medicareAmt);
    putValue("net", netAmt);
    putValue("milesAmt", milesAmt);
    putValue("phintAmt", phintAmt);
    putValue("otherAmt", otherAmt);
    putValue("payment",payment);
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
  const getSalary = (my_job) => {
    for (const [key, value] of Object.entries(jobs)) {
      if (my_job === key) {
        return value.rate;
      }
    }
  };
  function getValue (myString) {
    const input = document.getElementById(`${myString}`);
    let amtString = input.value;
    if (amtString.charAt(0) === "$") {amtString = amtString.substring(1)};
    return Number(amtString);
  }
  function putValue (myString, amt) {
    const div = document.getElementById(`${myString}`)
    div.textContent = "$" + Number(amt).toFixed(2);
  }
  function inputFormat(id, string) {
        switch (id) {
        case "hrsSV":
            return string.length === 0 ? 0 : string;
        case "miles":
            return string.length === 0 ? 0 : string;
        case "mtgs":
            return string.length === 0 ? 0 : string;
        case "ph":
            return string.length === 0 ? 1 : string;
        case "int":
            return string.length === 0 ? 1 : string;
        case "other":
            if (string.length === 0) {return "$0.00"}
            if (string === "$") {return "$0.00"}
            return currencyFormat(string);
        case "salary":
            if (string.length === 0) {return "$0.00"}
            if (string === "$") {return "$0.00"}
            return currencyFormat(string);
    };
  }
  function currencyFormat(string) {
    splitString = string.split("$").join("");
    result = Number(splitString).toLocaleString('en-US', {style: 'currency', currency:'USD'});
    return result;
  }
  