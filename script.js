let navbar = document.getElementById("navbar");
let menuBar = document.getElementById("menubar");

menuBar.onclick = () => {
    let status = false;
    if (status == false) {
        let navbar = document.getElementById("navbar").style.display = "flex";
        status = true;
    } else {
        // console.log(clicked)
        let navbar = document.getElementById("navbar").style.display = "none";
        status = false;
    }
}
