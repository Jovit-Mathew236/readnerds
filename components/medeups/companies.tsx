"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const companyLogos = [
  { src: "/assets/images/tessol.webp", alt: "Tessol" },
  { src: "/assets/images/thinktac.webp", alt: "ThinkTac" },
  { src: "/assets/images/nosh.webp", alt: "Nosh" },
  { src: "/assets/images/scikraft.webp", alt: "Scikraft" },
  { src: "/assets/images/vayavya.webp", alt: "Vayavya" },
  { src: "/assets/images/iitg.webp", alt: "IITG" },
  { src: "/assets/images/etherwhere.webp", alt: "EtherWhere" },
  { src: "/assets/images/yudurobotics.webp", alt: "Yudu Robotics" },
  { src: "/assets/images/anexgate.webp", alt: "AnexGATE" },
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const services = [
  "CAD-Design",
  "Laser CNC",
  "ESDM / PCBA",
  "Rapid Prototyping",
  "Others",
];

type FormValues = z.infer<typeof formSchema>;

const Companies = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });
  const onSubmit = async (data: FormValues) => {
    try {
      // Add your form submission logic here
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-primary/20 px-10 sm:px-36 py-28 mt-20 space-y-16 relative">
      <div className="flex text-primary font-bold items-center justify-center gap-4">
        <p>/</p>
        <p className="text-right uppercase">
          Tech Titans <br className="md:hidden" /> We Serve
        </p>
        <p>/</p>
      </div>

      {/* company icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {companyLogos.map((logo, index) => (
          <Image
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={500}
            height={500}
            priority
            className="w-full object-contain h-12"
          />
        ))}
      </div>

      {/* form contact */}
      <div className="flex flex-col relative max-h-[500px] sm:max-h-52 sm:flex-row gap-8">
        <div className="flex flex-1 flex-col items-start text-left space-y-4">
          <h1 className="font-bold">
            Gotta product that <br className="md:hidden" />
            we can help you design?
          </h1>
          <h1 className="text-primary font-bold">Let&apos;s talk!</h1>
        </div>
        <div className="flex-1absolute">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Email"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          type="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="What are you looking for" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        className="flex w-full rounded-lg border border-white/50 bg-white/20 backdrop-blur-lg px-4 py-2 text-base shadow-sm transition-all hover:bg-white/10 placeholder:text-white/70 focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-32 resize-none"
                        placeholder="Your Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="w-full rounded-lg border border-white/50 bg-white/20 backdrop-blur-lg px-4 py-3 text-base shadow-sm transition-all hover:bg-white/10 font-semibold"
              >
                Send Message
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Companies;
