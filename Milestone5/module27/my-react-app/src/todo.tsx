// function Todo(props) {
//   return (
//     <li>
//       Do this Work : {props.task} Time : {props.time}
//     </li>
//   );
// }

function Todo({ task, time }) {
  return (
    <li>
      Do this Work : {task} Time : {time}
    </li>
  );
}
export default Todo;
