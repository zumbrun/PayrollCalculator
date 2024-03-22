export function showHourspage() {
    const hourscontent = `
    <div class="header"></div>
    <div class="events">
        <div class="top">Date
            <label id="col1lbl" for="day"></label>
            <input type="date" id="day" name="day">
        </div>
        <div class="middle">
            <textarea id="description" placeholder="Description of Work"></textarea>
        </div>
        <div class="bottom">
            <div>
                <label for="hr">Enter hours:</label>
                <select name="hours" id="hr">
                    <option value="0" selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="7">8</option>
                </select>
            </div>
            <div>
                <label for="min">Enter minutes:</label>
                <select name="mins" id="min">
                    <option value="0" selected>00</option>
                    <option value="0.25">15</option>
                    <option value="0.50">30</option>
                    <option value="0.75">45</option>
                </select>
            </div>    
        </div>
        <div class="btn">
            <button id="cancelbutton">Cancel</button>
            <button id="submitbutton">Done</button>
            <button id="printbutton">Add</button>
        </div>
    </div>
    `;
    return hourscontent;
}