"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";
import Image from "next/image";
import logo from "@/public/2222.png";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4, ease: "easeOut" as const },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-10 md:gap-14">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="hidden items-center md:flex">
          <Image
            src={logo}
            height={20}
            width={130}
            sizes="130px"
            className="h-auto w-[130px]"
            alt="Ayan Shaikh"
            priority
          />
        </Link>
      </motion.div>

      {/* Desktop nav links */}
      {items?.length ? (
        <nav className="hidden gap-8 md:flex items-center">
          {items.map((item, index) => {
            const isActive = item.href.startsWith(`/${segment}`);
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ y: -1 }}
              >
                <Link
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "relative font-heading text-sm tracking-[0.18em] uppercase pb-1 transition-colors duration-200",
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary",
                    item.disabled && "cursor-not-allowed opacity-50"
                  )}
                >
                  {item.title}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-primary transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>
      ) : null}

      {/* Mobile menu button */}
      <motion.button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-heading text-xs tracking-widest uppercase">Menu</span>
      </motion.button>

      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
