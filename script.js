var handleAlert = function() {
    swal({
        text: "Belum ada fitur login bossku",
        button: "Kembali",
    });
};

var button = document.querySelector("#login");
button.addEventListener('click', handleAlert);

var alert = function() {
    swal("Daftarkan email", {
        content: "input",
    })
    .then((value) => {
        swal(`Pendaftaran selesai ${value}`);
    });
};

var btn = document.querySelector("#email");
btn.addEventListener('click',alert);

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
menuToggle.addEventListener('click',function(){
    if (nav.className != "active") {
        nav.className = "active";
    } else {
        nav.className = "";
    }
});