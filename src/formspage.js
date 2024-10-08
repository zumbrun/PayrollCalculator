export function showFormspage() {
    const mycontent = `
    <div class="title" id="title"></div>
    <div class="title" id="rowtitle"></div>
    <div class="eventdiv">Date
        <label for="day"></label>
        <input type="date" id="day" name="day" required>
    </div>
    <div class="descdiv">
        <label id="desclabel"></label>
        <textarea id="description" placeholder="Enter description" required></textarea>
    </div>
    <div id="myhours" class="eventdiv">
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
        <label for="min">  min: </label>
        <select name="mins" id="min" required>
            <option value="0">00</option>
            <option value="0.25">15</option>
            <option value="0.5">30</option>
            <option value="0.75">45</option>
        </select> 
    </div>
    <div id="mymiles" class="eventdiv">
        <label for="bmiles">Enter miles:</label>
        <input type="number" step="0.01" id="bmiles" name="bmiles">
    </div>
    <div id="mymisc" class="eventdiv">
        <label for="bmisc">Enter misc expense:</label>
        <input type="number" min="0" step="0.01" id="bmisc" name="bmisc">
    </div>
    <div class="btn">
        <button class="singlebutton" id="previousbutton"><</button>
        <button class="singlebutton" id="cancelbutton">Clear</button>
        <button class="singlebutton" id="submitbutton">Return</button>
        <button class="singlebutton" id="nextbutton">></button>
    </div>
    `;
    return mycontent;
}