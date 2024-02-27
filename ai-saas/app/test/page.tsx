import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div align="center">
         <p className="text-green-800">Test Page </p>

         <Button variant="destructive" size={"lg"}>Logout</Button>
    </div>
   
  );
}
