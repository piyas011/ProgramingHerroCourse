type userRole = "Admin" | "User" | "Moderator" | "Guest";

interface UserData {
  name: string;
  role: userRole;
  email: string;
}

interface Admin extends UserData {
  permissions: string[];
}

interface Moderator extends UserData {
  moderatedSections: string[];
}

const userAdmin: Admin = {
  name: "UserAdmin",
  role: "Admin",
  permissions: ["add user", "remove user"],
  email: "admin213@gmail.com",
};
