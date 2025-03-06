/* eslint-disable react/display-name */
"use client";
import Image from "next/image";
import React, { useState } from "react";
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
import { toast } from "sonner";

// Memoize company logos to prevent unnecessary re-renders
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      // Map form data to Google Form entries with correct entry numbers
      const formData = new FormData();
      formData.append("entry.1213070634", data.name);
      formData.append("entry.556407093", data.email);
      formData.append("entry.1372544995", data.phone);
      formData.append("entry.1330038153", data.service);
      formData.append("entry.241667131", data.message);

      const url =
        "https://docs.google.com/forms/d/e/1FAIpQLScO6AgxA9osPewSjz6gHxTtIi5VwmGDNXbhuNb1UTFDYa4IEA/formResponse";

      // Use fetch with no-cors mode to submit to Google Form
      // This approach works better than iframe for cross-origin requests
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      // Show success toast
      toast.success("Form submitted successfully!", {
        description: "We'll get back to you soon.",
      });

      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong!", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Memoize the logo grid to prevent unnecessary re-renders
  const LogoGrid = React.memo(() => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {companyLogos.map((logo, index) => (
        <Image
          key={`company-logo-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            index
          }`}
          src={logo.src}
          alt={logo.alt}
          width={500}
          height={500}
          priority={index < 4} // Only prioritize loading the first visible logos
          loading={index < 4 ? "eager" : "lazy"} // Lazy load the rest
          className="w-full object-contain h-12"
        />
      ))}
    </div>
  ));

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
      <LogoGrid />

      {/* form contact */}
      <div className="flex flex-col relative max-h-[500px] sm:max-h-52 sm:flex-row gap-8">
        <div className="flex flex-1 flex-col items-start text-left space-y-4">
          <h1 className="font-bold">
            Got a product that <br className="md:hidden" />
            we can help you design?
          </h1>
          <h1 className="text-primary font-bold">Let&apos;s talk!</h1>
        </div>
        <div className="flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 max-w-[450px] m-auto"
            >
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
                disabled={isSubmitting}
                className="w-full rounded-lg border border-white/50 bg-white/20 backdrop-blur-lg px-4 py-3 text-base shadow-sm transition-all hover:bg-white/10 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Companies;
