export function showReviewpage () {
    const reviewcontent = `
    <div class="printform">
    <ul>
    <div>
        <li>
            <span>Name:  </span>
            <span id="ipname"></span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title:   </span>
            <span id="iptitle"></span>
        </li>
    </div>
    <div class="flexrow">
        <div>
            <span>Total Meetings:</span>
            <span id="ipmtgs"></span>
        </div>
        <div>
            <span>Haverhill board meetings:</span>
            <span id="ipbmtgs"></span>
        </div>
        <div>
            <span>Other official meetings:</span>
            <span id="ipomtgs"></span>
        </div>
    </div>
    <div id="prntomtgs">
        <table class="twocols" id="tblomtgs">
            <tr>
                <th>Date</th>
                <th>Description of Other Official Meetings</th>
            </tr>
        </table>
    </div>
    <div id="supervisors">
        <li>
        <span>Total Supervisor Hours: </span>
        <span id="iphours"></span>
        </li>
    </div>
    <div id="prnthours">
        <table class="threecols" id="tblhours">
            <tr>
                <th>Date</th>
                <th>Description of Work</th>
                <th>Hours</th>
            </tr>
        </table>
    </div>
    <div>
        <li>
        <span>Total Miles: </span>
        <span id="ipmiles"></span>

        </li>
    </div>
    <div id="prntmiles">
        <table class="threecols" id="tblmiles">
            <tr>
                <th>Date</th>
                <th>Description of Travel</th>
                <th>Miles</th>
            </tr>
        </table>
    </div>
    <div>
        <li>
        <span>Phone Reimbursement:   </span>
        <span id="ipphone"></span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Internet Reimbursement:   </span>
        <span id="ipinternet"></span>
        </li>
    </div>
    <div>
        <li>
        <span>Total Miscellaneous Expenses (attach receipts):  $</span>
        <span id="ipmisc"></span> 
        </li>
    </div>
    <div id="prntmisc">
        <table class="threecols" id="tblmisc">
            <tr>
                <th>Date</th>
                <th>Description of Item</th>
                <th>Expense</th>
            </tr>
        </table>
    </div>
    <div>
        <li>
        <span>Signature: ______________________________________  Date:  </span>
        <span id="ipdate"></span>
        </li>
    </div>
    </ul>
    <div class="btn" class = "flexdiv">
        <button id="clearbutton">Back</button>
        <button id="submitbutton">SUBMIT</button>
    </div>
    </div>

`;
return reviewcontent;
}