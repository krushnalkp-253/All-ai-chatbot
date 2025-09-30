
"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const {setTheme} = useTheme();
  return (
    <div>
      <h2>Jay shree Ram</h2>
      <Button>add</Button>
      <Button onClick={()=>setTheme('dark')}>Dark Mode</Button>
      <Button onClick={()=>setTheme('light')}>Light Mode</Button>
    </div>
  );
}
