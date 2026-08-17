enum Day {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

let ofDay = Day.friday;
console.log(ofDay);

enum Roles {
  Admin = "Admin",
  Moderator = "Moderator",
}

const user = {
  name: "Piyas",
  roles: Roles.Moderator,
};

console.log(user.roles);
