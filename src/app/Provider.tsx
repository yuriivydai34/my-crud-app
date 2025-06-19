'use client'

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";

import { PropsWithChildren } from "react";

export default function Provider({ children }: PropsWithChildren) {
  const router = useRouter();
  
  return (
    <HeroUIProvider navigate={router.push}>
      {children}
    </HeroUIProvider>
  );
}