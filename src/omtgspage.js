export function showOmtgspage() {
    const omtgscontent = `
    <div class="header">Other Official Meetings</div>
    <div class="events">
        <div class="top">Date
            <label for="day"></label>
            <input type="date" id="day" name="day">
        </div>
        <div class="middle">
            <textarea id="description" placeholder="Description of Work"></textarea>
        </div>
        <div class="bottom" class="btn">
            <button id="cancelbutton">Cancel</button>
            <button id="submitbutton">Done</button>
            <button id="printbutton">Add</button>
        </div>
    </div>
    `;
    return omtgscontent;
}