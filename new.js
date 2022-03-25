createtable();
function formValidation() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var mobile = document.getElementById("Mobile").value;
    var validate_name=false;
    var validate_email=false;
    var validate_mobile=false;
    
    var a = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?0123456789]/);
    
    if (a.test(name)) {
        alert("Name can only be alphabet");
    }else{
        validate_name=true;
    }
    
    var match = mobile.match(/^[0-9\s(-)]*$/);
    if(mobile!=""){
        if (!match) {
        alert("Special characters not allowed in mobile number");
        return false;
    }else if(mobile.length!=10){
        alert("Number should be 10 digi");
        
    }else{
        validate_mobile=true;
    }}
    else{
        validate_mobile=true;
    }
   

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid e-mail address");
        return false;
    }
    else{
        validate_email=true;
    }
    if(validate_email && validate_mobile && validate_name){
        setTable();
        createtable();
    }
}
function setTable(){
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var mobile = document.getElementById("Mobile").value;
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Mobile", mobile);
}
function createtable() {
    let tableBody = document.getElementById('tbody');
    let tr = document.createElement("tr");
    // tr.className="table_row";
    //creating name node
    let td1 = document.createElement("td");
    
    let nameNode = document.createTextNode(localStorage.getItem("Name"));
    td1.appendChild(nameNode);
    //create email node
    let td2 = document.createElement('td');
    // td2.setAttribute('style','margin:20px');
    let emailNode = document.createTextNode(localStorage.getItem("Email"));
    // td2.setAttribute('style','margin-left:20px');
    td2.appendChild(emailNode);
    //create mobile node
    let td3 = document.createElement('td');
    
    let mobileNode = document.createTextNode(localStorage.getItem("Mobile"));
    // td3.setAttribute('style','margin-left:40px');
    td3.appendChild(mobileNode);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tableBody.append(tr);

}