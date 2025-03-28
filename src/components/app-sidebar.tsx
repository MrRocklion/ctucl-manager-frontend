"use client"
import * as React from "react"
import {
  Bot,
  Home,
  Users2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Usuarios",
      url: "#",
      icon: Users2,
      isActive: true,
      items: [
        {
          title: "Administradores",
          url: "/dashboard/usuarios",
        }
      ],
    },
    {
      title: "Paradas",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Automatizadas",
          url: "/dashboard/paradas",
        }
      ],
    }
  ],
  projects: [
    {
      name: "Inicio",
      url: "/dashboard",
      icon: Home,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher  />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
