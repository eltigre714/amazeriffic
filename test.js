var toDoObjects = [
    {
        "description" : "Get groceries",
        "tags"  : [ "shopping", "chores" ]
    },
    {
        "description" : "Make up some new ToDos",
        "tags"  : [ "writing", "work" ]
    },
    /* etc */
];


var organizeByTags = function (toDoObjects) {
    console.log("organizeByTags called");
};

var main = function () {
    "use strict";

    organizeByTags(toDoObjects);
};

$(document).ready(main);