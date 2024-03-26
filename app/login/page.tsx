"use client";

import type { NextRequest } from "next/server";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Login() {
    const { data: session } = useSession();
    if (session !== null) {
        redirect("/admin");
    }

    return (
        <div>
            <p>This is login page - you can either choose an option for GitHub or Google Authentication.</p>
            <button onClick={() => signIn("github")}>Sign in with github</button>
            <button onClick={() => signIn("google")}>Sign in with google</button>
        </div>
    )

}