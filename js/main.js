var syncano = SyncanoConnector.getInstance();
var authData = {
    api_key: "73e8719c66b633aea9a28f554b6d93428ef360d1",
    instance: "weathered-wood-115384"
};
var PROJECT_ID = 6193;
var COLLECTION_ID = 18736;

syncano.connect(authData, function(auth) {
    console.log("Connected");
});

syncano.on('syncano:authorized', function(auth) {
    console.log("authorized");
});

var params = {
    include_children: false,
    folders: 'Default'
}
var pointer_data_id1, pointer_data_id2;
var win = true;
while (win != true) {
    var pointer = new XMLHttpRequest();
    var url = "https://weathered-wood-115384.syncano.com/api/data.get_one";
    var params = "api_key=73e8719c66b633aea9a28f554b6d93428ef360d1&project_id=6193&collection_id=18736&data_id=3513891";
    pointer.open("POST", url, true);

    //Send the proper header information along with the request
    pointer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    pointer.onreadystatechange = function() { //Call a function when the state changes.
        if (pointer.readyState == 4 && pointer.status == 200) {
            pointer_data_id = pointer.responseText;
            arr = pointer_data_id.split("\"");
            pointer_data_id1 = arr[5];

        }
    }
    pointer.send(params);

    var pointer = new XMLHttpRequest();
    var url = "https://weathered-wood-115384.syncano.com/api/data.get_one";
    var params = "api_key=73e8719c66b633aea9a28f554b6d93428ef360d1&project_id=6193&collection_id=18736&data_id=3514226";
    pointer.open("POST", url, true);

    //Send the proper header information along with the request
    pointer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    pointer.onreadystatechange = function() { //Call a function when the state changes.
        if (pointer.readyState == 4 && pointer.status == 200) {
            pointer_data_id = pointer.responseText;
            arr = pointer_data_id.split("\"");
            pointer_data_id2 = arr[5];

        }
    }
    pointer.send(params);



}

syncano.on('syncano:newdata:project-6193', function(data) {
    if (data) {
        console.log("Received Data:");
        console.log(data);
    }
});


// var grey = 100,
//     white = 100;

// $('#grey').on('click', function() {
//     move('#grey')
//         .add('width', 20)
//         .end();

//     move('#white')
//         .sub('width', 20)
//         .end();

//     grey += 2;
//     white -= 2;

//     if (grey == 200) {
//         alert("grey");
//     }
// });

// $('#white').on('click', function() {
//     move('#white')
//         .add('width', 20)
//         .end();

//     move('#grey')
//         .sub('width', 20)
//         .end();

//     grey -= 2;
//     white += 2;

//     if (white == 200) {
//         alert("white");
//     }
// });


var cerebrawl = angular.module('cerebrawl', []);

cerebrawl.controller('scoreController', function($scope) {
    $scope.grey = 100;
    $scope.white = 100;

    $scope.incGrey = function() {
        move('#grey')
            .add('width', 20)
            .end();

        move('#white')
            .sub('width', 20)
            .end();

        $scope.grey += 2;
        $scope.white -= 2;

        if (grey == 200) {
            alert("grey");
        }
    }

    $scope.incWhite = function() {
        move('#white')
            .add('width', 20)
            .end();

        move('#grey')
            .sub('width', 20)
            .end();

        $scope.grey -= 2;
        $scope.white += 2;

        if (white == 200) {
            alert("white");
        }
    }

});
