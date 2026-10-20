
var hoa = document.getElementById("hoa");
var cacNut = document.querySelectorAll("button");

cacNut.forEach(function(nut) {
    nut.addEventListener("click", function() {
        var hieuung = nut.dataset.hieuung;

        hoa.className = "";

        if (hieuung != "gray") {
            hoa.classList.add(hieuung);
        }

        cacNut.forEach(function(n) {
            n.classList.remove("chon");
        });

        nut.classList.add("chon");
    });
});
