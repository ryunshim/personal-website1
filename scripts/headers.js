const enableHeader = (cat) => {
    $("#header").load("/templates/header.html", () => {
        $(cat).removeClass("inactive-link");
        $(cat).addClass("active-link");
    });
    $("#footer").load("/templates/footer.html");
}