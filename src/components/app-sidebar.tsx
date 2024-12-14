"use client";

import * as React from "react";
import {
  BookOpen,
  ChartPie,
  Command,
  CreditCard,
  Github,
  LayoutDashboard,
  UserRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import useUserData from "@/hooks/useUserData";
import { APP_NAME } from "@/config/appConfig";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Invoice",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Create",
          url: "/create",
        },
        {
          title: "Saved",
          url: "/saved",
        },
      ],
    },
    {
      title: "Clients",
      url: "/clients",
      icon: UserRound,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: ChartPie,
    },
    {
      title: "Payments",
      url: "/payments",
      icon: CreditCard,
    },
  ],
  navSecondary: [
    {
      title: "Documentation",
      url: "#",
      icon: Github,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useUserData();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{APP_NAME}</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {user && (
          <NavUser
            user={{
              name: user.name,
              email: user.email,
              avatar: user.avatarUrl,
            }}
          />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
