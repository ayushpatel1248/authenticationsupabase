import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";


export default function Home() {
  const setNewView = async () =>{
    const {data, error} = await supabase
    .from("supabasetask1")
    .select()

    console.log("ayush patel")

  if(data) console.log(data)
  if(error) console.log(error)

  };
  {setNewView()}

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link href="/login">
        {" "}
        <Button>
          <Mail /> Login with Email
        </Button>
      </Link>
    </div>
  );
}
