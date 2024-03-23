export function showMiscpage() {
    const misccontent = `
    <div class="header">Enter Misc Expenses</div>
    <div class="events">
        <div class="top">Date
            <label id="col1lbl" for="day"></label>
            <input type="date" id="day" name="day">
        </div>
        <div class="middle">
            <textarea id="description" placeholder="Description of Work"></textarea>
        </div>
        <div class = "bottom">
            <label for="bmisc">Enter expense:</label>
            <input type="number" min="0" id="bmisc" name="bmisc">
        </div>
        <div class="btn">
            <button id="cancelbutton">Cancel</button>
            <button id="submitbutton">Done</button>
            <button id="printbutton">Add</button>
        </div>
    </div>
    `;
    return misccontent;
}