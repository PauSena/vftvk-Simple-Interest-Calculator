function uptadeRate() {
    var rateValueRead = document.getElementById("rate").value;
    document.getElementById("rateValue").innerText=rateValueRead + "%";

}
function compute() {
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Type a valid amount.");    
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        
        var interest = principal * years * rate / 100;

        var year = new Date().getFullYear() + parseInt(years);
        
        document.getElementById("result").innerText=
        "If you deposit " + principal + ", at an interest rate of " + rate +
        "%. You will recieve an amount of " + interest + "$ in the year " + year
        ;
    }
    
}
        
