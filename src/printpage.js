import "./prints.js";

export function showPrintpage () {
    const printcontent = `
    <div class="printform">
        <div>
            <span>Name:  </span>
            <span id="prntname"></span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title:  </span>
            <span id="prnttitle"></span>
        </div>
        <div>
            <span padding-right="20px">1. Haverhill board meetings attended:  </span>
            <span id="prntbmtgs"></span>
            <span padding-right="20px">&nbsp;&nbsp;Other official meetings attended:  </span>
            <span id="prntomtgs"></span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;TOTAL:  </span>
            <span id="prntmtgs"></span>
        </div>
        <div id="tblmtgs"></div>
        <div id="supervisors">
            <span>2. Total supervisor hours: </span>
            <span id="prnthours"></span>
            <span> hours</span>
        </div>
        <div id="tblhours"></div>
        <div>
            <span>3. Total mileage: </span>
            <span id="prntmiles"></span>
            <span> miles</span>
        </div>
        <div id="tblmiles"></div>
        <div>
            <span>4. Phone Reimbursement:   </span>
            <span id="prntphone"></span>
            <span>Internet Reimbursement:  </span>
            <span id="prntinternet"></span>
        </div>
        <div>
            <span>5.  Miscellaneous expenses (attach receipts):  </span>
            <span>$</span>
            <span id="prntmisc"></span> 
        </div>
        <div id="tblmisc"></div>
        <div>
            <span>Signature: ______________________________________  Date:  </span>
            <span id="prntdate"></span>
        </div>
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
                <td> + PERA</tdh>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>$</td>
                <td id="summedicare"></td>
                <td> + Medicare</tdh>
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
                <td id="summileage"></td>
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
        <div>
            <table id="ratetable">
                <tr>
                    <th>meetings</th>
                    <th>PERA</th>
                    <th>medicare</th>
                    <th>mileage</th>
                    <th>phone</th>
                    <th>internet</th>
                    <th>Supervisor</th>
                    <th>Clerk</th>
                    <th>Dep Clerk</th>
                    <th>Treasurer</th>
                    <th>Dep Treasurer</th>
                </tr>
                <tr>
                    <td id="refmeeting"></td>
                    <td id="refpera"></td>
                    <td id="refmedicare"></td>
                    <td id="refmileage"></td>
                    <td id="refphone"></td>
                    <td id="refinternet"></td>
                    <td id="refsup"></td>
                    <td id="refclerk"></td>
                    <td id="refdepclerk"></td>
                    <td id="reftreas"></td>
                    <td id="refdeptreas"></td>
                </tr>
            </table>
        </div>
    </div>
  </div>
  <div class="footer">powered by InControl Technologies, LLC</div>
  `;
  return printcontent;
}
