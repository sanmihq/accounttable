import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section>
      <div className="flex h-screen items-center justify-center">
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          forceRedirectUrl="/dashboard" // Redirect to the dashboard after sign-in
        />
      </div>
    </section>
  );
}
