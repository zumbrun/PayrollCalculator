
export function showOutputspage () {
    const outputcontent = `
        <div class="flexdiv">
           <table id="outputtable">
            <tr>
                <td>$</td>
                <td id="opsalary"></td>
                <td> + Salary or Hourly</tdh>
            </tr>
            <tr>
                <td>$</td>
                <td id="opmtgs"></td>
                <td> + Meetings</tdh>
            </tr>
            <tr>
                <td>$</td>
                <td id="optotalwage"></td>
                <td> = Total Wages</tdh>
            </tr>
            <tr>
                <td>$</td>
                <td id="oppera"></td>
                <td> - Pera</tdh>
            </tr>
            <tr>
                <td>$</td>
                <td id="opmedicare"></td>
                <td> - Medicare</tdh>
            </tr>
            <tr>
                <td>$</td>
                <td id="opnet"></td>
                <td> = NET Wage </tdh>
            </tr>
            <tr>
                <td>$</td>
                <td id="opmileage"></td>
                <td> + Mileage</tdh>
            </tr>
            <tr>
                <td>$</td>
                <td id="opphone"></td>
                <td> + Phone</td>
            </tr>
            <tr>
                <td>$</td>
                <td id="opinternet"></td>
                <td> + Internet</td>
            </tr>
            <tr>
                <td>$</td>
                <td id="opmisc"></td>
                <td> + Misc expenses</td>
            </tr>
            <tr>
                <td>$</td>
                <td id="optotalpay"></td>
                <td> = Total Payment</td>
            </tr>
        </table>
    </div>
    <div class="btn">
        <button id="cancelbutton">Cancel</button>
        <button id="printbutton">Print</button>
    </div>
    `;
    return outputcontent;
}