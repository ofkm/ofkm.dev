import { MainContent } from "@/components/main-content";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MainContent>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Build your component library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Beautifully designed components that you can copy and paste into your
            apps. Accessible. Customizable. Open Source.
          </p>
        </div>

        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/components">Browse Components</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Copy & Paste</h3>
            <p className="text-sm text-muted-foreground">
              Copy and paste components into your apps. No package to install.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Customizable</h3>
            <p className="text-sm text-muted-foreground">
              Components are built to be customized. Change colors, fonts, and
              more.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-2">Accessible</h3>
            <p className="text-sm text-muted-foreground">
              Built with accessibility in mind. WAI-ARIA compliant.
            </p>
          </div>
        </div>
      </div>
    </MainContent>
  );
}
