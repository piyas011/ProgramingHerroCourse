import React, { Suspense } from "react";
import ResetPasswordForm from "./resetPasswordForm";

const ResetPassword = () => {
  return (
    <div>
      <h2>Reset Password</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <ResetPasswordForm></ResetPasswordForm>
      </Suspense>
    </div>
  );
};

export default ResetPassword;
