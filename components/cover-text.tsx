import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-600 to-neutral-500 dark:from-neutral-500 dark:via-white dark:to-white">
        ¡Haz tus Sitios Web con <br /> estos <Cover>recursos</Cover>!
      </h1>
    </div>
  );
}
