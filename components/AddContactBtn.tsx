import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Separator } from "./ui/separator";
import AddContactForm from "./AddContactForm";

const AddContactBtn = () => {
  return (
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
        <AddContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddContactBtn;
