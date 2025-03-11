
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const AdminNavBar = () => {
  const router = useRouter();

  return (
    <header className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Link href="/admin" className="text-xl font-bold">
            Admin Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">View Site</Button>
          </Link>
          <Button variant="outline" onClick={() => router.push("/")}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminNavBar;
