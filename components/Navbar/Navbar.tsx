"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-center gap-2">
      {session?.user ? (
        <div className="flex gap-4">
          <p>{session.user.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>SignIn</button>
      )}
    </nav>
  );
}
