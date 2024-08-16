// Getting elements on the HTML page
let ip1 = document.querySelector("#exampleInputEmail1");
let ip2 = document.querySelector("#exampleInputPassword1"); // Correct way to select the input field
let btn = document.querySelector(".btn");
let msg = document.querySelector("#message");
let data = `[
    {
        "email":"harik2132003@gmail.com",
        "password":201021028
    },
    {
        "email":"dhina123@gmail.com",
        "password":201021022
    },
    {
        "email":"arun123@gmail.com",
        "password":201021011
    },
    {
        "email":"akash123@gmail.com",
        "password":201021006
    },
    {
        "email":"keyan123@gmail.com",
        "password":201021047
    }
]`

// To avoid refresh on submit
let form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    processData();
});

// Parsing the JSON data
let dataObj = JSON.parse(data);

// Function to process and log the data
function processData() {
    let ipt1 = ip1.value;
    let ipt2 = parseInt(ip2.value); // Ensure the password is treated as a number
    let loginSuccess = false;

    for (let el of dataObj) {
        if (ipt1 === el.email && ipt2 === el.password) {
            loginSuccess = true;
            console.log("Successfully submitted...");
            msg.textContent = "Login successful!";
            msg.style.cssText="margin:20px 0;background-color:green;padding:5px 8px;text-algin:center;text-align: center;";
                // form.setAttribute("action", "http://127.0.0.1:5500/js/js-task-frontend/FormValidation1.html");
                // form.submit(); // Submit the form programmatically
            // window.open('http://127.0.0.1:5500/FormValidation-task/FormValidation1.html');
            break; // Exit the loop as soon as a match is found
        }
    }

    if (!loginSuccess) {
        console.log("Not submitted");
        msg.textContent = "Invalid email or password!";
        msg.style.cssText="margin:20px 0;background-color:red;padding:5px 8px;text-algin:center;";
    }
}
//------------------=========================================--------------------------------------
//input field onfocus
ip1.addEventListener("focus",()=>{
    ip1.style.cssText="background-color:#9adeaa;;"
})
ip2.addEventListener("focus",()=>{
    ip2.style.cssText="background-color:#9adeaa;;"
})

//---------------------------------------------------------------------------------
//view and hidden
let view=document.querySelector("#icon-1")
view.addEventListener("click",()=>{
    if(ip2.type==="password"){
        ip2.setAttribute("type","text");
    }
    else{
        ip2.setAttribute("type","password");
    }
})