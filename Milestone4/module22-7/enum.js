"use strict";
var Day;
(function (Day) {
    Day[Day["monday"] = 0] = "monday";
    Day[Day["tuesday"] = 1] = "tuesday";
    Day[Day["wednesday"] = 2] = "wednesday";
    Day[Day["thursday"] = 3] = "thursday";
    Day[Day["friday"] = 4] = "friday";
    Day[Day["saturday"] = 5] = "saturday";
    Day[Day["sunday"] = 6] = "sunday";
})(Day || (Day = {}));
let ofDay = Day.friday;
console.log(ofDay);
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Moderator"] = "Moderator";
})(Roles || (Roles = {}));
const user = {
    name: "Piyas",
    roles: Roles.Moderator,
};
console.log(user.roles);
