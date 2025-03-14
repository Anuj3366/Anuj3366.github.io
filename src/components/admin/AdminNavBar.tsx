
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdminNavBar = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
        <div className="flex items-center gap-2">
          <Link to="/admin" className="text-xl font-bold">
            Admin Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost">View Site</Button>
          </Link>
          <Link to="/">
            <Button variant="outline">
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminNavBar;
