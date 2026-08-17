// interface Response {
//     // data : any;
//     data : string | number | boolean | null | object;
//     status : number;
// }

interface UserResponse<T> {
  data: T;
  status: number;
}

const transactionResponse: UserResponse<string> = {
  data: "Transaction successful",
  status: 200,
};

const transactionStatus: UserResponse<boolean> = {
  data: true,
  status: 300,
};

const transactionAmount: UserResponse<number> = {
  data: 300,
  status: 200,
};
