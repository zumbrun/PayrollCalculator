export function showOmtgspage() {
    const omtgscontent = `
    <form id="omtgsform">
    <div class="header">Enter other official meetings</div>
    <div class="events">
        <div class="top">Date
            <label for="day"></label>
            <input type="date" id="day" name="day" required>
        </div>
        <div class="middle">
            <textarea id="description" placeholder="Description of Work" required></textarea>
        </div>
        <div class="bottom" class="btn">
            <button id="cancelbutton">Cancel</button>
            <button id="submitbutton">Done</button>
            <button id="printbutton">Add</button>
        </div>
    </div>
    </form>
    `;
    return omtgscontent;
}