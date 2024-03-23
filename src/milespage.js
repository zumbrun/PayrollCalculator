export function showMilespage() {
    const milescontent = `
    <div class="header">Enter Miles</div>
    <div class="events">
        <div class="top">Date
            <label for="day"></label>
            <input type="date" id="day" name="day">
        </div>
        <div class="middle">
            <textarea id="description" placeholder="Description of Work"></textarea>
        </div>
        <div class="bottom">
            <label for="bmiles">Enter miles:</label>
            <input type="number" min="0" id="bmiles" name="bmiles">
        </div>
        <div class="btn">
            <button id="cancelbutton">Cancel</button>
            <button id="submitbutton">Done</button>
            <button id="printbutton">Add</button>
        </div>
    </div>
    `;
    return milescontent;
}