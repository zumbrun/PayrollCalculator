export function showHourspage() {
    const hourscontent = `
    <form id="hoursform">
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
        <label for="hr">Enter hours:</label>
        <select name="hours" id="hr" required>
            <option value="0" selected>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
        </select>
        <label for="min">Enter minutes:</label>
        <select name="mins" id="min" required>
            <option value="0">00</option>
            <option value="0.25">15</option>
            <option value="0.50">30</option>
            <option value="0.75">45</option>
        </select> 
    </div>
    <div class="btn">
        <button id="cancelbutton">Cancel</button>
        <button id="submitbutton">Done</button>
        <button id="printbutton">Add</button>
    </div>
    </form>
    `;
    return hourscontent;
}