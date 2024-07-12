function genpass(length, inclow, incupp, incno, incsymb) {
    const lowerchars = "qwertyuiopasdfghjklzxcvbnm";
    const upperchars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*()_+-=/";

    let allowedchars = "";
    let password = "";

    allowedchars += inclow ? lowerchars : "";
    allowedchars += incupp ? upperchars : "";
    allowedchars += incno ? numberchars : "";
    allowedchars += incsymb ? symbolchars : "";

    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }
    return password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(passwordField.value).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

/*
    Summary of  how COPYPASSWORD FN WORKS TO 'COPY PASSWORD'
    ** more details in => details-about text file cheack it out **
    
    - **Select the input field** containing the password.
    - **Highlight the text** inside the input field.
    - **Copy the highlighted text** to the clipboard.
    - **Show a confirmation alert** if successful, or log an error if it fails.


*/



const passwordlength = 10;
const inclow = true;
const incupp = true;
const incno = true;
const incsymb = true;

document.getElementById("generateButton").addEventListener("click", () => {
    const password = genpass(passwordlength, inclow, incupp, incno, incsymb);
    document.getElementById("password").value = password;
});