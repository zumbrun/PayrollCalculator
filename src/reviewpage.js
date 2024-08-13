export function showReviewpage () {
    const reviewcontent = `
    <div class="reviewform">
        <ul>
            <div>
                <li>
                    <span>Name:  </span>
                    <span id="ipname"></span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title:   </span>
                    <span id="iptitle"></span>
                </li>
            </div>
            <div>
                <li>
                    <span>Total Meetings: </span>
                    <span id="ipmtgs"></span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>( Haverhill: </span>
                    <span id="ipbmtgs"></span>
                    <span>&nbsp;&nbsp;+&nbsp;&nbsp;</span>
                    <span>Other: </span>
                    <span id="ipomtgs"> </span>
                    <span>)</span>
                </li>
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
                <span>Total Hours: </span>
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
                <span>Total Miscellaneous Expenses (attach receipts):  </span>
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
                <span>Pera:  </span>
                <span id="ippera"></span>
                </li>
            </div>
            <div>
                <li>
                <span>Date:  </span>
                <span id="ipdate"></span>
                </li>
            </div>
        </ul>
    </div>
    <div class="btn" class = "flexdiv">
        <button type="button" class="singlebutton" id="backbutton">Back</button>
        <button class="singlebutton" id="submitbutton">SUBMIT</button>
    </div>
`;
return reviewcontent;
}