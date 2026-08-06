import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6 lg:px-8">
      <p className="text-primary font-mono text-xs font-medium tracking-[0.14em] uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
        That page does not exist
      </h1>
      <p className="text-muted-foreground mt-4 max-w-md leading-relaxed text-pretty">
        The link may be out of date, or the page may have moved. Everything else
        is still where you left it.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}
