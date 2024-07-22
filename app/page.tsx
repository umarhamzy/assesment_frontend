import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Searchbar from "@/components/Searchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowDownWideNarrow,
  Bell,
  CircleHelp,
  Filter,
  LayoutGrid,
  Plus,
  Rows2,
  SquareKanban,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import AddContactBtn from "@/components/AddContactBtn";

export default function Home() {
  return (
    <div className="max-w-screen-xl p-6 mx-auto">
      <header className="flex justify-between items-center mb-6">
        <Searchbar />
        <div className="text-neutral-500 flex">
          <Button asChild variant={"ghost"}>
            <Link href="/notifications">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href="/help">
              <CircleHelp className="w-4 h-4 mr-2" />
              Help Center
            </Link>
          </Button>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Dana Morris</NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <div className="flex justify-between text-neutral-500">
        <div>
          <Button variant={"ghost"}>
            <Rows2 className="w-4 h-4 mr-2" />
            List
          </Button>
          <Button variant={"ghost"}>
            <SquareKanban className="w-4 h-4 mr-2" />
            Kanban
          </Button>
          <Button variant={"ghost"}>
            <LayoutGrid className="w-4 h-4 mr-2" />
            Grid
          </Button>
        </div>
        <div className="flex gap-x-3">
          <Button variant={"outline"} className="border-neutral-400">
            <ArrowDownWideNarrow className="w-4 h-4 mr-2" /> Sort By
          </Button>
          <Button variant={"outline"} className="border-neutral-400">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Separator orientation="vertical" />
          <AddContactBtn />
        </div>
      </div>
      <Separator className="my-3" />
      <div className="flex justify-between">
        <div className="flex items-center">
          <Badge variant={"secondary"} className="px-3 py-1 text-xs">
            All Contacts
          </Badge>
          <Badge
            variant={"outline"}
            className="px-3 py-1 text-xs text-neutral-500 border-0"
          >
            Employee
          </Badge>
          <Badge
            variant={"outline"}
            className="px-3 py-1 text-xs text-neutral-500 border-0"
          >
            Partners
          </Badge>
          <Badge
            variant={"outline"}
            className="px-3 py-1 text-xs text-neutral-500 border-0"
          >
            Customers
          </Badge>
        </div>
        <div>
          <Button variant="ghost" className="text-sky-600 font-semibold">
            <Plus className="w-5 mr-2" />
            Placeholder
          </Button>
        </div>
      </div>
      <Separator className="my-3" />
      <main className="flex items-center justify-center min-h-[60dvh]">
        <div className="text-center space-y-3">
          <h1 className="font-medium text-2xl">Expand Your Network!</h1>
          <p className="text-neutral-400 w-[40ch] text-xs">
            It looks like your contact list is off to a quiet start. <br /> Add
            your contacts now to stay connected and stay organized.
          </p>
          <AddContactBtn />
        </div>
      </main>
    </div>
  );
}
