export function showInputspage() {
    const inputcontent = `
    <form id="inputform">
    <div class="title">Quarterly Payroll Input</div>
    <div class="gridcontainer">
        <div class="lcol">Name:</div>
        <div class="rcol">
            <label for="name"></label>
            <select autocomplete = "off" id="name" required></select>
        </div>
        <div class="lcol">Haverhill board mtgs attended:</div>
        <div class="rcol">
            <input id = "bmtgs3" type="radio" name="bmtgs" value="3" required>
            <label for="bmtgs3">3</label>
            <input id = "bmtgs2" type="radio" name="bmtgs" value="2">
            <label for="bmtgs2">2</label>
            <input id = "bmtgs1" type="radio" name="bmtgs" value="1">
            <label for="bmtgs1">1</label>
            <input id = "bmtgs0" type="radio" name="bmtgs" value="0">
            <label for="bmtgs0">0</label>
        </div>
        <div class="lcol">Other official meetings attended:</div>
        <div class="rcol">
            <label for="omtgs"></label>
            <input type="number" id="omtgs" name="omtgs" value="0">
        </div>
        <div class="lcol">Enter Hours:</div>
        <div class="rcol">
            <label for="hours"></label>
            <input autocomplete="off" type="text" step="any" id="hours" name="hours" value="0">
        </div>
        <div class="lcol">Enter other reimbursement miles:</div>
        <div class="rcol">
            <label for="miles"></label>
            <input type="number" step="any" id="miles" name="miles" min="0" value="0">
        </div>
        <div class="lcol">Enter other expenses:</div>
        <div class="rcol">
            <label for="misc"></label>
            <input type="text" step="any" id="misc" name="misc" value="0">
        </div>
        <div class="lcol">Cell phone reimbursement?</div>
        <div class="rcol">
            <input autocomplete="off" id = "phone1" type="radio" name="phone" value="1" required/>
            <label for = "phone1">Yes</label>
            <input autocomplete="off" id = "phone0" type="radio" name="phone" value="0"/>
            <label for = "phone0">No</label>
        </div>
        <div class="lcol">Internet reimbursement?</div>
        <div class="rcol">
            <input id = "internet1" type="radio" name="internet" value="1" required>
            <label for = "internet1">Yes</label>
            <input id = "internet0" type="radio" name="internet" value="0">
            <label for = "internet0">No</label>
        </div>
        <div class="lcol">Participant in PERA?</div>
        <div class="rcol">
            <input type="radio" id="pera1" name="pera" value="1" required>
            <label for="pera1">Yes</label>
            <input type="radio" id="pera0" name="pera" value="0" >
            <label for="pera0">No</label>
        </div>
    </div>
    <div class="btn">
        <button class="singlebutton" type="button" id="backbutton">Clear</button>
        <button class="singlebutton" id="submitbutton">REVIEW</button>
    </div>
    </form>
        `;
    return inputcontent;
}
