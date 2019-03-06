function actualizeBookableList() {

    var bookables = Cahier.bookings[0].bookables;

    $('divTabCahierTopList').children[0].innerHTML = "";

    for (var i = 0; i < bookables.length; i++) {
        var d = div($('divTabCahierTopList').children[0]);
        d.id = i;
        d.onclick = function (event) {
            if (event.target == this) {
                popBookable(Cahier.bookings[0].bookables[this.id].id);
            }
        };

        var img = div(d);
        //img.style.backgroundImage = ''

        var close = div(d);
        close.id = i;
        close.onclick = function () {
            Cahier.removeBookable(0, Cahier.bookings[0].bookables[this.id]);
        };

        var code = div(d);
        code.innerHTML = bookables[i].code;
    }

    if (true) {
        var d = div($('divTabCahierTopList').children[0]);

        d.onclick = function () { newTab('divTabCahierMaterielChoice'); };

        var img = div(d);
        img.style.backgroundImage = 'url(Img/IconEye.png)';
    }

}