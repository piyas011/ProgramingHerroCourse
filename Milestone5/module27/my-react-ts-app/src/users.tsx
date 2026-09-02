interface UserNamePropsType {
  userName: string;
  userAge: number;
  isLoggedIn: boolean;
}

// export default function Users({
//   userName,
//   userAge,
//   isLoggedIn,
// }: UserNamePropsType) {
//   if (isLoggedIn) {
//     return (
//       <div>
//         <li>Name : {userName}</li>
//         <li> Age : {userAge}</li>
//         <li> logInStatus : Online </li>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <li>Name : {userName}</li>
//       <li> Age : {userAge}</li>
//       <li> logInStatus : Offline </li>
//     </div>
//   );
// }

interface Users {
  userName: string;
  userAge: number;
  isLogin: boolean;
}

const users: Users[] = [
  { userName: "Piyas", userAge: 21, isLogin: true },
  { userName: "Ahmed", userAge: 20, isLogin: false },
  { userName: "Rohim", userAge: 22, isLogin: true },
  { userName: "Korim", userAge: 21, isLogin: false },
  { userName: "Solim", userAge: 21, isLogin: false },
  { userName: "Kala Mia", userAge: 24, isLogin: true },
];

export default function Users() {
  return (
    <div>
      {users.map((user) => (
        <li>User Name :-- {user.userName}</li>
      ))}
    </div>
  );
}
