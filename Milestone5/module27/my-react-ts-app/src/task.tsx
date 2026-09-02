interface TaskPropsTypes {
  name: string;
  isDone: boolean;
}

export default function Task({ name, isDone }: TaskPropsTypes) {
  //   return isDone ? <li>Completed : {name}</li> : <li>Pending : {name}</li>;

  // true
  return isDone && <li>Completed : {name}</li>;

  // false
  //   return isDone || <li>Pending : {name}</li>;

  //   if (isDone) {
  //     return <li>Completed : {name}</li>;
  //   } else {
  //     return <li>Pending : {name}</li>;
  //   }
}
