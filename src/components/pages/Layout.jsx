import React from "react";
import Dashboard from "./Dashboard";
import {
  Sidebar,
  //useSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <div>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader />
            <h5>My Portfolio</h5>
            <SidebarContent>
              <SidebarGroup />
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-house"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                      <span>Home</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
        </SidebarProvider>
      </div>
      {/* <Navbar></Navbar> */}
    </>
  );
}
// export function CustomTrigger() {
//   const { toggleSidebar } = useSidebar();

//   return <button onClick={toggleSidebar}>Toggle Sidebar</button>;
// }

export default Layout;
