import Image from "next/image";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
      <div className="h-screen" align="center">
         <a href="/"> 
         Account Dashboard Page  <UserButton afterSignOutUrl="/"/>
         </a>    
         <Button variant="destructive" size={"lg"}>Logout</Button></div>
   
  );
}
