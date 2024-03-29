"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Admin() {
    const { data: session } = useSession();
    if (session === null) {
        console.log("Redirecting to login page");
        console.log(session);
        redirect("/login");
    } else {
        console.log(session);
    }

    return (
        <div>
            <p>This is after logged in page. You can consider it as Admin page.</p>
            <p>If user is already logged, stay in this page, if not, return to login page</p>

            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )

}