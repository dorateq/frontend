import Image from "next/image"
import TypewriterComponent from "typewriter-effect";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative">

      </div>
      <p className="text-sm text-muted-foreground">
    
        <TypewriterComponent
            options={{
              strings: [
                "...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
      </p>
    </div>
  );
};



