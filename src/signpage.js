import "./sign.js";

export function showSignpage () {
    const signcontent = `
    <div >
        <canvas id="signatureCanvas" width="450" height="100"></canvas>
        <div class="btn" class = "flexdiv">
            <button class="singlebutton" id="savebutton">Save</button>
            <button class="singlebutton" id="clearbutton">Clear</button>
        </div>
    </div>
     `;
  return signcontent;
}
