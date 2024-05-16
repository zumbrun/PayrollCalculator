import "./prints.js";

export function showPrintpage () {
    const printcontent = `
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
            <span>Meeting Pay:</span>
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
        <span>Supervisor Pay: </span>
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
        <span>Mileage Reimbursement: </span>
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
        <span>Miscellaneous expenses (attach receipts):  </span>
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
    <div id="summary">
        <table id="summarytable">
            <tr>
                <th></th>
                <th>Amount</th>
                <th>Description</th>
                <th>Fund</th>
                <th>Account</th>
                <th>Obj Code</th>
            </tr>
            <tr>
                <td>$</td>
                <td id="sumsalary"></td>
                <td> + Salary or Hourly</tdh>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="summtgs"></td>
                <td> + Meetings</tdh>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="sumtotalwage"></td>
                <td> = Total Wages</tdh>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="sumpera"></td>
                <td> - PERA</tdh>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="summedicare"></td>
                <td> - Medicare</tdh>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="sumnet"></td>
                <td> = NET Wage </tdh>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="summiles"></td>
                <td> + Mileage</tdh>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="sumphone"></td>
                <td> + Phone</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="suminternet"></td>
                <td> + Internet</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="summisc"></td>
                <td> + Misc expenses</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="sumtotalpay"></td>
                <td> = Total Payment</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
    <div id="reftables">
        <table id="ratetable">
            <tr>
                <th>meetings</th>
                <th>PERA</th>
                <th>medicare</th>
                <th>mileage</th>
                <th>phone</th>
                <th>internet</th>
                
            </tr>
            <tr>
                <td id="refmeetings"></td>
                <td id="refpera"></td>
                <td id="refmedicare"></td>
                <td id="refmileage"></td>
                <td id="refphone"></td>
                <td id="refinternet"></td>
            </tr> 
        </table>
        <table id="salarytable">
            <tr>
                <th>Supervisor</th>
                <th>Clerk</th>
                <th>Dep Clerk</th>
                <th>Treasurer</th>
                <th>Dep Treasurer</th>
            </tr>
            <tr>  
                <td id="refsupervisor"></td>
                <td id="refclerk"></td>
                <td id="refdeputyclerk"></td>
                <td id="reftreasurer"></td>
                <td id="refdeputytreasurer"></td>
            </tr>
        </table>
    </div>
    </div>
     `;
  return printcontent;
}
