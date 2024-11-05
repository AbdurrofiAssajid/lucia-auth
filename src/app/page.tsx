"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/login");
  };

  const handleSignUp = () => {
    router.replace("/signup");
  };

  return (
    <>
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleSignUp}>Sign Up</Button>
    </>
  );
}
