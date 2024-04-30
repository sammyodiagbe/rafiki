import NavigationBar from "@/components/app-ui/navbar";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="p-10">
        <section className="grid items-center grid-cols-[700px_1fr] h-[calc(100vh-70px)] pt-1 p-20 gap-10">
          <div>
            <h1 className="text-7xl font-black pb-10">
              Follow <span className="text-blue-500">Rafiki</span>, he knows the
              way.
            </h1>
            <p className="leading-8 max-w-[800px] pb-10">
              Welcome to Rafiki, your ultimate AI companion designed to simplify
              your life and elevate your digital experience. With
              state-of-the-art natural language processing and adaptive learning
              capabilities, Rafiki is more than just a virtual assistant—it's a
              trusted advisor, a creative partner, and a loyal friend. From
              managing your tasks and scheduling appointments to engaging in
              meaningful conversations and fostering connections, Rafiki is here
              to empower you every step of the way. Join us and discover a new
              era of personalized AI assistance tailored to your unique needs
              and preferences.
            </p>
            <SignedOut>
              <Button className="bg-blue-500 py-7 px-10 hover:bg-blue-700 text-white font-bold">
                <SignInButton afterSignInUrl="/chat" mode="modal">
                  Get Started
                </SignInButton>
              </Button>
            </SignedOut>
            <SignedIn>
              <Link href={"/chat"}>
                <Button
                  variant={"outline"}
                  className="border-blue-500 text-blue py-7 px-10 font-bold text-blue-500"
                >
                  Continue to chat
                </Button>
              </Link>
            </SignedIn>
          </div>
          <div>
            <Image
              src={"/hero_images/Dark mode.svg"}
              alt="Rafiki"
              width={600}
              height={500}
              className="max-w-full w-full h-auto rounded-sm"
            />
          </div>
        </section>
      </main>
    </>
  );
}
