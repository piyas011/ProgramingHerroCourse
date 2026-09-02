interface UserNamePropsType {
  userName: string;
  userAge: number;
  isLoggedIn: boolean;
}

export default function Users({
  userName,
  userAge,
  isLoggedIn,
}: UserNamePropsType) {
  if (isLoggedIn) {
    return (
      <div>
        <li>Name : {userName}</li>
        <li> Age : {userAge}</li>
        <li> logInStatus : Online </li>
      </div>
    );
  }

  return (
    <div>
      <li>Name : {userName}</li>
      <li> Age : {userAge}</li>
      <li> logInStatus : Offline </li>
    </div>
  );
}
