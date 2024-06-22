export function showMiscpage() {
    const misccontent = `
    <form id="miscform">
    <div class="title">
        <div>Enter Hours</div>
    </div>
    <div class="eventdiv">Date
        <label for="day"></label>
        <input type="date" id="day" name="day" required>
    </div>
    <div class="descdiv">
        <textarea id="description" placeholder="Description of Work" required></textarea>
    </div>
    <div class="eventdiv">
        <label for="bmisc">Enter misc expense:</label>
        <input type="number" min="0" step="0.01" id="bmisc" name="bmisc" required>
    </div>
    <div class="btn">
        <button id="cancelbutton">Cancel</button>
        <button id="submitbutton">Done</button>
        <button id="printbutton">Next</button>
    </div>
    </form>
    `;
    return misccontent;
}