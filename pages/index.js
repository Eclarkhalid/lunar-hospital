import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-4xl font-bold">Lunar Hospital</h1>
            <p className="text-balance text-muted-foreground">
              Step into the gleaming corridors of Lunar Hospital, where innovation meets compassionate care beneath the soft glow of state-of-the-art lighting.
            </p>

          </div>
          <div className="grid gap-4">
            <Button
              type="submit"
              className="w-full"
              onClick={() => {
                window.location.href = '/dashboard';
              }}
            >
              Login
            </Button>

            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="hospital.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
