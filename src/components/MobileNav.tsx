
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, File, Mail } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const closeSheet = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-navy">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-cream p-0">
        <div className="flex flex-col h-full">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-navy">Menu</h2>
              <Button variant="ghost" size="icon" onClick={closeSheet} className="text-navy">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <nav className="flex-1 overflow-auto py-4">
            <div className="flex flex-col gap-1">
              <a
                href="#home"
                onClick={closeSheet}
                className="px-6 py-3 text-navy hover:bg-navy/10"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={closeSheet}
                className="px-6 py-3 text-navy hover:bg-navy/10"
              >
                About
              </a>
              <a
                href="#education"
                onClick={closeSheet}
                className="px-6 py-3 text-navy hover:bg-navy/10"
              >
                Education
              </a>
              <a
                href="#experience"
                onClick={closeSheet}
                className="px-6 py-3 text-navy hover:bg-navy/10"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={closeSheet}
                className="px-6 py-3 text-navy hover:bg-navy/10"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={closeSheet}
                className="px-6 py-3 text-navy hover:bg-navy/10"
              >
                Skills
              </a>
            </div>
          </nav>

          <div className="border-t border-gray-200 p-6 flex flex-col gap-2">
            <Button variant="outline" className="w-full text-navy border-navy hover:bg-navy hover:text-cream">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button className="w-full bg-navy hover:bg-navy/80 text-cream">
              <File className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
