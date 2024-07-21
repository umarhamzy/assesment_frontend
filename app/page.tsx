import { Input } from "@/components/ui/input";
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
  Trash2,
  Upload,
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
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePicker } from "@/components/DatePicker";

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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-sky-600">
                <Plus className="w-4 h-4 mr-2" /> Add Contact
              </Button>
            </DialogTrigger>
            <DialogContent className="min-w-[40rem]">
              <DialogHeader className="mb-3">
                <DialogTitle>Edit Contact</DialogTitle>
              </DialogHeader>
              <Separator className="absolute top-0 left-0 mt-[54px]" />
              <form className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="https://i.pravatar.cc/" />
                    <AvatarFallback>RF</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="secondary" size="sm">
                      <Upload className="w-4 mr-2" />
                      Change Image
                    </Button>
                  </div>
                  <Button variant="secondary" size="icon">
                    <span className="sr-only">Delete Image</span>
                    <Trash2 size="18" className="text-neutral-500" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="firstName" className="font-normal">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      defaultValue="Robert"
                      className="border-neutral-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lastName" className="font-normal">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      defaultValue="Fox"
                      className="border-neutral-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="contactCategories" className="font-normal">
                      Contact Categories
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="contactCategories"
                        className="border-neutral-400"
                      >
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="font-normal">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="robert.fox@google.com"
                      className="border-neutral-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="font-normal">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="(671) 555-0110"
                      className="border-neutral-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="company" className="font-normal">
                      Company
                    </Label>
                    <Input
                      id="company"
                      defaultValue="Google"
                      className="border-neutral-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="birthDate" className="font-normal">
                      Birth Date
                    </Label>
                    <DatePicker />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="occupation" className="font-normal">
                      Occupation
                    </Label>
                    <Input
                      id="occupation"
                      defaultValue="Manager"
                      className="border-neutral-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="font-normal">Gender</Label>
                  <RadioGroup defaultValue="male" className="flex space-x-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="country" className="font-normal">
                      Country
                    </Label>
                    <Select defaultValue="us">
                      <SelectTrigger
                        id="country"
                        className="border-neutral-400"
                      >
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="cities" className="font-normal">
                      Cities
                    </Label>
                    <Select>
                      <SelectTrigger id="cities" className="border-neutral-400">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="address" className="font-normal">
                    Address
                  </Label>
                  <Input
                    id="address"
                    defaultValue="Majestic Ave, 21 Tree St."
                    className="border-neutral-400"
                  />
                </div>

                <div className="flex space-x-5">
                  <Button variant="secondary" className="w-full">
                    Cancel
                  </Button>
                  <Button type="submit" className="w-full">
                    Save
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
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
      <section className="flex items-center justify-center min-h-[60dvh]">
        <div className="text-center space-y-3">
          <h1 className="font-medium text-2xl">Expand Your Network!</h1>
          <p className="text-neutral-400 w-[40ch] text-xs">
            It looks like your contact list is off to a quiet start. <br /> Add
            your contacts now to stay connected and stay organized.
          </p>
          <Button className="bg-sky-600">
            <Plus className="mr-2" /> Add Contact
          </Button>
        </div>
      </section>
    </div>
  );
}
