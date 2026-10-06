import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from "resend";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db("my_second_database");
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      void resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Forgot Password",
        html: `
    <h1>Reset Your Password</h1>
    <p>Click the link below to reset your password:</p>
    <p><a href="${url}">Reset Password</a></p>
    <p>If the button doesn't work, copy this link: ${url}</p>
  `,
      });
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify your email address",
        html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
      </head>
      <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 40px 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; background-color: #0f172a; text-align: center;">
              <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 600; letter-spacing: -0.5px;">Acme Inc.</h1>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="color: #1e293b; font-size: 20px; font-weight: 600; margin-top: 0; margin-bottom: 16px;">Welcome! Verify your email</h2>
              <p style="color: #475569; font-size: 15px; line-height: 1.6; margin-top: 0; margin-bottom: 24px;">
                Thanks for starting your account creation process. Please click the button below to verify your email address and complete your signup.
              </p>
              
              <!-- CTA Button -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding: 12px 0 28px 0;">
                    <a href="${url}" target="_blank" style="background-color: #2563eb; color: #ffffff; display: inline-block; font-size: 15px; font-weight: 600; padding: 12px 32px; text-decoration: none; border-radius: 6px; box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);">
                      Verify Email Address
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color: #64748b; font-size: 13px; line-height: 1.5; margin-bottom: 24px;">
                If the button doesn't work, copy and paste this link into your web browser: <br>
                <a href="${url}" style="color: #2563eb; word-break: break-all;">${url}</a>
              </p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
              
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                If you didn't request this email, you can safely ignore it.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f8fafc; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                &copy; ${new Date().getFullYear()} Acme Inc. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `,
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600, // 1 hour
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    },
  },
  //...
  database: mongodbAdapter(db, {
    client,
  }),
});
