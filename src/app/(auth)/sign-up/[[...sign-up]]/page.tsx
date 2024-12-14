import { SignUp } from "@clerk/nextjs";

export default function SignUnPage() {
  return (
    <section>
      <div className="flex h-screen items-center justify-center">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          forceRedirectUrl="/dashboard" // Redirect to the dashboard after sign-up
        />
      </div>
    </section>
  );
}
