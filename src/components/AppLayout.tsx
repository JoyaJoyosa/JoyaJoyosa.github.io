
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar";
import { BookOpen, Map, Skull, Scroll, Archive, Settings, Search, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Atlas",
    url: "/atlas",
    icon: Map,
  },
  {
    title: "Bestiary",
    url: "/bestiary",
    icon: Skull,
  },
  {
    title: "Grimoire",
    url: "/grimoire",
    icon: Scroll,
  },
  {
    title: "Archives",
    url: "/archives",
    icon: Archive,
  },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background text-foreground">
        <Sidebar variant="floating" collapsible="icon">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Omniverse</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={location.pathname === item.url} tooltip={item.title}>
                        <Link to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup className="mt-auto">
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="Settings">
                                <Link to="/settings">
                                    <Settings />
                                    <span>Settings</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-auto relative">
            <div className="p-4 md:p-6 lg:p-8 w-full max-w-7xl mx-auto">
                <div className="mb-4 md:hidden">
                    <SidebarTrigger />
                </div>
                {children}
            </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
