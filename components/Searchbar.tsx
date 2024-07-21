import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <Button
      variant="outline"
      className="w-80 justify-between border border-slate-400 p-3 rounded-sm hover:bg-white"
    >
      <div className="flex justify-between items-center text-neutral-400">
        <Search className="mr-2" />
        <span className="font-normal">Search</span>
      </div>
      <div className="flex gap-x-2">
        <kbd className="px-1.5 rounded-sm bg-slate-100 flex items-center justify-center  text-neutral-600 text-xs">
          ⌘
        </kbd>
        <kbd className="px-1.5 rounded-sm bg-slate-100 text-neutral-600 flex items-center justify-center">
          F
        </kbd>
      </div>
    </Button>
  );
};

export default Searchbar;
