export function showInputpage() {
    const inputcontent = `
        <div class = "inputs">
            <div class="title">Quarterly Payroll Input</div> 
            <div>
                <label for="dropdownList">Name:</label>
                <select id="dropdownList"></select>
            </div>
            <div id="hrs">
                <label for="hours">Enter hours:</label>
                <input type="text" step="any" id="hours" name="hours" value="0" required="">
            </div>
            <div>
                <legend>Haverhill board mtgs attended:</legend> 
                <input id = "bmtg3" type="radio" name="bmtgs" value="3" required="">
                <label for="bmtg3">3</label>
                <input id = "bmtg2" type="radio" name="bmtgs" value="2">
                <label for="bmtg2">2</label>
                <input id = "bmtg1" type="radio" name="bmtgs" value="1">
                <label for="bmtg1">1</label>
                <input id = "bmtg0" type="radio" name="bmtgs" value="0">
                <label for="bmtg0">0</label>
            </div>
            <div>
                <label for="omtgs">Other official meetings attended:</label>
                <input type="number" step="1" id="omtgs" name="omtgs" value="0" min="0" required="">
            </div>
            <div>
                <legend>Cell phone reimbursement?</legend>
                <input id = "phoneY" type="radio" name="phone" value="1" required="">
                <label id = "phoneY">Yes</label>
                <input id = "phoneN" type="radio" name="phone" value="0">
                <label id = "phoneN">No</label>
            </div>
            <div>
                <legend>Internet reimbursement?</legend> 
                <input id = "internetY" type="radio" name="internet" value="1" required="">
                <label id = "internetY">Yes</label>
                <input id = "internetN" type="radio" name="internet" value="0">
                <label id = "internetN">No</label>
            </div>

            <div>
                <label for="miles">Enter reimbursement miles:</label>
                <input type="number" step="any" id="miles" name="miles" min="0" value="0" required="">
            </div>
            <div>
                <label for="misc">Enter other expenses:</label>
                <input type="text" step="any" id="misc" name="misc" value="$0.00" required="">
            </div>
            <div>
                <legend>Participant in PERA?</legend>
                <input type="radio" id="peraY" name="pera" value="1" required="">
                <label for="peraY">Yes</label>
                <input type="radio" id="peraN" name="pera" value="0" >
                <label for="peraN">No</label>
            </div>
            <div class="btn">
                <button id="submitbutton">Submit</button>
            </div>
        </div>
        `;
    return inputcontent;
}
