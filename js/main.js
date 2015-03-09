var start = function() {
    var playing = setInterval(function() {
        var pointer = new XMLHttpRequest();
        var url = "https://weathered-wood-115384.syncano.com/api/data.get_one";
        var params = "api_key=73e8719c66b633aea9a28f554b6d93428ef360d1&project_id=6193&collection_id=18736&data_id=3513891";
        pointer.open("POST", url, true);

        //Send the proper header information along with the request
        pointer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        pointer.onreadystatechange = function() { //Call a function when the state changes.
            if (pointer.readyState == 4 && pointer.status == 200) {
                pointer_data_id = pointer.responseText;
                var arr = pointer_data_id.split("\"");
                pointer_data_id1 = arr[5];

                var pointer2 = new XMLHttpRequest();
                var url2 = "https://weathered-wood-115384.syncano.com/api/data.get_one";
                var params2 = "api_key=73e8719c66b633aea9a28f554b6d93428ef360d1&project_id=6193&collection_id=18736&data_id=3514226";
                pointer2.open("POST", url, true);

                //Send the proper header information along with the request
                pointer2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                pointer2.onreadystatechange = function() { //Call a function when the state changes.
                    if (pointer2.readyState == 4 && pointer2.status == 200) {
                        pointer_data_id2 = pointer2.responseText;
                        var arr = pointer_data_id2.split("\"");
                        pointer_data_id2 = arr[5];

                        console.log(pointer_data_id1 + " " + pointer_data_id2);
                        if (pointer_data_id1 > pointer_data_id2) {
                            $('#greyText').text(parseInt($('#greyText').text()) + 1);
                            $('#whiteText').text(parseInt($('#whiteText').text()) - 1);

                            move('#grey')
                                .add('width', 15)
                                .end();

                            move('#white')
                                .sub('width', 15)
                                .end();

                            if (parseInt($('#greyText').text()) >= 300) {
                                clearInterval(playing);
                                $('#greyText').text("Dino won!");

                            }

                        } else if (pointer_data_id2 > pointer_data_id1) {
                            $('#whiteText').text(parseInt($('#whiteText').text()) + 1);
                            $('#greyText').text(parseInt($('#greyText').text()) - 1);

                            move('#white')
                                .add('width', 15)
                                .end();

                            move('#grey')
                                .sub('width', 15)
                                .end();

                            if (parseInt($('#whiteText').text()) >= 300) {
                                clearInterval(playing);
                                $('#whiteText').text("Batman won!");
                            }
                        }

                    }
                }
                pointer2.send(params2);

            }
        }
        pointer.send(params);

    }, 100);

}


var greyFunc = function() {
    $('#greyText').text(parseInt($('#greyText').text()) + 1);
    $('#whiteText').text(parseInt($('#whiteText').text()) - 1);

    move('#grey')
        .add('width', 15)
        .end();

    move('#white')
        .sub('width', 15)
        .end();

    if (parseInt($('#greyText').text()) >= 300) {
        clearInterval(playing);
        $('#greyText').text("Dino won!");
    }
}

var whiteFunc = function() {
    $('#whiteText').text(parseInt($('#whiteText').text()) + 1);
    $('#greyText').text(parseInt($('#greyText').text()) - 1);

    move('#white')
        .add('width', 15)
        .end();

    move('#grey')
        .sub('width', 15)
        .end();

    if (parseInt($('#whiteText').text()) >= 300) {
        clearInterval(playing);
        $('#whiteText').text("Batman won!");
    }
}
