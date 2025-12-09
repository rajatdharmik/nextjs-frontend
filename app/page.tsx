import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-from";

export default function Home() {
  return (
    <main className="flex items-center gap-5 justify-center mt-20">
      <ContactForm></ContactForm>
    </main>
  );
}
