import { SignUp } from "@clerk/nextjs";

export default function SignUnPage() {
  return (
    <section>
      <div className="flex h-screen items-center justify-center">
        <SignUp />
      </div>
    </section>
  );
}
