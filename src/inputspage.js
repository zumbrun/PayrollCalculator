export function showInputspage() {
    const inputcontent = `
    <form id="inputform">
        <div class="title">Quarterly Payroll Input</div> 
        <div class="flexdiv">
            <label for="name">Name:</label>
            <select autocomplete = "off" id="name"></select>
        </div>
        <div class="flexdiv" id="hrs">
            <label for="hours">Enter hours:</label>
            <input autocomplete="off" type="text" step="any" id="hours" name="hours" value="0">
        </div>
        <div class="flexdiv">
            <legend>Haverhill board mtgs attended:</legend> 
            <input id = "bmtgs3" type="radio" name="bmtgs" value="3" required>
            <label for="bmtgs3">3</label>
            <input id = "bmtgs2" type="radio" name="bmtgs" value="2">
            <label for="bmtgs2">2</label>
            <input id = "bmtgs1" type="radio" name="bmtgs" value="1">
            <label for="bmtgs1">1</label>
            <input id = "bmtgs0" type="radio" name="bmtgs" value="0">
            <label for="bmtgs0">0</label>
        </div>
        <div class="flexdiv">
            <label for="omtgs">Other official meetings attended:</label>
            <input type="number" id="omtgs" name="omtgs" value="0">
        </div>
        <div class="flexdiv">
            <legend>Cell phone reimbursement?</legend>
            <input autocomplete="off" id = "phone1" type="radio" name="phone" value="1" required/>
            <label for = "phone1">Yes</label>
            <input autocomplete="off" id = "phone0" type="radio" name="phone" value="0"/>
            <label for = "phone0">No</label>
        </div>
        <div class="flexdiv">
            <legend>Internet reimbursement?</legend> 
            <input id = "internet1" type="radio" name="internet" value="1" required>
            <label for = "internet1">Yes</label>
            <input id = "internet0" type="radio" name="internet" value="0">
            <label for = "internet0">No</label>
        </div>

        <div class="flexdiv">
            <label for="miles">Enter reimbursement miles:</label>
            <input type="number" step="any" id="miles" name="miles" min="0" value="0">
        </div>
        <div class="flexdiv">
            <label for="misc">Enter other expenses:</label>
            <input type="text" step="any" id="misc" name="misc" value="0">
        </div>
        <div class="flexdiv">
            <legend>Participant in PERA?</legend>
            <input type="radio" id="pera1" name="pera" value="1" required>
            <label for="pera1">Yes</label>
            <input type="radio" id="pera0" name="pera" value="0" >
            <label for="pera0">No</label>
        </div>
        <div class="btn" class = "flexdiv">
            <button id="clearbutton">Clear</button>
            <button id="submitbutton">REVIEW</button>
        </div>
    </form>
        `;
    return inputcontent;
}
