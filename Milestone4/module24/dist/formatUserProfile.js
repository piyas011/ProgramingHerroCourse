"use strict";
// type User = {
//   name: string;
//   age: number;
//   city: string;
// };
Object.defineProperty(exports, "__esModule", { value: true });
const formatUserProfile = (user) => {
    return ` ${user.name} is ${user.age} years old and lives in ${user.city}`;
};
console.log(formatUserProfile({ name: "Piyas", age: 21, city: "Dhaka" }));
//# sourceMappingURL=formatUserProfile.js.map