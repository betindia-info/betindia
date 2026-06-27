"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { auth } from "@/lib/firebase";
import AdminShell from "./AdminShell";

// Simple client-side auth guard: if no Firebase user is signed in, bounce to
// the login page; otherwise render the admin shell. (No server-side session.)
export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email ?? "admin");
        setChecked(true);
      } else {
        router.replace("/admin/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (!checked || !email) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#050B18] text-slate-500">
        <Loader2 size={22} className="animate-spin" />
      </div>
    );
  }

  return <AdminShell email={email}>{children}</AdminShell>;
}
