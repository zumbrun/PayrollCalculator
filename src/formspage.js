export function showFormspage() {
    const mycontent = `
    <form id="inputform">
    <div class="title" id="title"></div>
    <table id="inputtable">
        <thead>
            <tr>
                <th></th>
                <th>Date</th>
                <th>Description</th>
                <th>Hrs</th>
                <th>Mins</th>
                <th>Miles</th>
                <th>Expenses</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><button id="trashbutton"><img class="mysvg" src="../src/images/trashcan.svg"></button></td>
                <td><input class="ip" type="date" required></td>
                <td><textarea placeholder="Enter description" required></textarea></td>
                <td><select required>
                        <option value="0" selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select></td>
                <td><select required>
                        <option value="0" selected>00</option>
                        <option value="0.25">15</option>
                        <option value="0.5">30</option>
                        <option value="0.75">45</option>
                    </select></td> 
                <td><input class="ip" type="number" min="0" step="0.1"></td>
                <td>$ <input class="ip" type="number" min="0" step="0.01"></td>
            </tr>
        </tbody>
    </table>
    <div class="btn">
        <button class="singlebutton" id="addbutton">Add Row</button>
        <button class="singlebutton" id="cancelbutton">Cancel</button>
        <button class="singlebutton" id="submitbutton">Done</button>
    </div>
    </form>
    `;
    return mycontent;
}