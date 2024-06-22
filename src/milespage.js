export function showMilespage() {
    const milescontent = `
    <form id="milesform"
    <div class="title">
        <div>Enter Miles</div>
    </div>
    <div class="eventdiv">Date
        <label for="day"></label>
        <input type="date" id="day" name="day" required>
    </div>
    <div class="descdiv">
        <textarea id="description" placeholder="Description of Work" required></textarea>
    </div>
    <div class="eventdiv">
        <label for="bmiles">Enter miles:</label>
        <input type="number" step="0.01" id="bmiles" name="bmiles" required>
    </div>
    <div class="btn">
        <button id="cancelbutton">Cancel</button>
        <button id="submitbutton">Done</button>
        <button id="printbutton">Next</button>
    </div>
    </form>
    `;
    return milescontent;
}