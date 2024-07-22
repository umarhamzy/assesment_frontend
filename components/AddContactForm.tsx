import { Trash2, Upload } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DatePicker } from "./DatePicker";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const AddContactForm = () => {
  return (
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
            <SelectTrigger id="country" className="border-neutral-400">
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
  );
};

export default AddContactForm;
