import { GitHubStarBadge } from "@/components/common/github-star-badge";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md">
        <div className="container flex h-20 md:h-24 items-center justify-between">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              {/* <GitHubStarBadge className="w-full justify-center" /> */}
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center gap-5">
            {/* <GitHubStarBadge /> */}
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
