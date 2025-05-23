// Your code here
function greet() {
    const name = prompt("What is your name?");
        alert("Hello, " +name+ "!");

    const age = prompt("So, how old are you " +name+ "?");
    const agenum = parseInt(age);

    const birthday = confirm("Have you had a birthday yet this year?")
    const currentyear = new Date().getFullYear();
    
    if (birthday) {
        birthyear = currentyear - agenum;
        alert("Your birthday has passed, you were born in " +birthyear+ ".");
    } else {
        birthyear = currentyear - agenum - 1;
        alert("Your birthday has NOT passed, you were born in " +birthyear+ ".");
    }
}