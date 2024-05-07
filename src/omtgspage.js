export function showOmtgspage() {
    const omtgscontent = `
    <form id="omtgsform">
    <div class="title">Enter other official meetings</div>
    <div class="eventdiv">Date
        <label for="day"></label>
        <input type="date" id="day" name="day" required>
    </div>
    <div class="descdiv">
        <textarea id="description" placeholder="Description of Work" required></textarea>
    </div>
    <div class="btn">
        <button id="cancelbutton">Cancel</button>
        <button id="submitbutton">Done</button>
        <button id="printbutton">Add</button>
    </div>
    </form>
    `;
    return omtgscontent;
}