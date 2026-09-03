// async function loadData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

import { use } from "react";
import UserCart from "./userCart";

//   return data;
// }

// const dataLoad = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   return data;
// };

//---------------------------------------------//

function Users({ usersDataPromise }) {
  const users = use(usersDataPromise);
  console.log(users);

  return (
    <div>
      <h2>Users :{users.length}</h2>
      {users.map((user) => (
        <UserCart user={user}></UserCart>
      ))}
    </div>
  );
}

export default Users;

/**
 * Suspense fallback
 */
