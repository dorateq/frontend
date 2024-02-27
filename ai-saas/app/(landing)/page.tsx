import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div align="center">
      <h2>Welcome to Landing Page</h2>
          <a href="/sign-in"> 
             <Button variant="ghost" size={"lg"}>Login</Button>
          </a>

          <a href="/sign-up"> 
             <Button variant="ghost" size={"lg"}>Register</Button>
          </a>
    </div>
   
  );
}
