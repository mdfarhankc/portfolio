import React from "react";
import {
  MailIcon,
  HomeIcon,
  PhoneCall,
  User,
  MessageSquare,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ContactImage from "@/components/contact/contact-image";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="bg-orange-50 dark:bg-inherit dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 pt-12 md:h-[480px] mb-6 md:mb-24 mx-12">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-base md:text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello, Future Collaborators!
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Unlock Innovation: I&apos;m a passionate coder ready to elevate
              your projects or contribute to your team. Let&apos;s build success
              together. Whether you&apos;re a client with a vision or a company
              seeking talent, let&apos;s connect and turn ideas into impactful
              realities. Your next chapter starts here – let&apos;s create
              something extraordinary
            </p>
          </div>
          <div className="hidden md:flex w-full">
            <ContactImage />
          </div>
        </div>
        <div className="grid md:grid-cols-2 pb-20 mx-12">
          <div className="flex flex-col gap-y-4 md:gap-y-14 mb-12 md:mb-24 text-base md:text-lg">
            <div className="flex items-center gap-x-8 text-base md:text-lg">
              <MailIcon size={18} className="text-primary" />
              <div>kcfarhan123@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8 text-base md:text-lg">
              <HomeIcon size={18} className="text-primary" />
              <div>Kannur, Kerala, India</div>
            </div>
            <div className="flex items-center gap-x-8 text-base md:text-lg">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 989******9</div>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
              <Input
                type="name"
                id="name"
                placeholder="Name"
                className="bg-orange-50 dark:bg-background/70"
              />
              <User className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="bg-orange-50 dark:bg-background/70"
              />
              <MailIcon className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
              <Textarea
                id="message"
                placeholder="Type Your Message..."
                className="bg-orange-50 dark:bg-background/70"
              />
              <MessageSquare className="absolute right-6" size={20} />
            </div>
            <Button className="flex items-center max-w-[166px]">
              Submit <ArrowRightIcon size={20} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
