"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useSidebarState } from "./hooks/useSidebar";

export const AppSidebar = () => {
  const { isExpanded } = useSidebarState();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <div
          className={`flex items-center p-2 ${
            isExpanded ? "justify-between flex-row" : "justify-center"
          }`}
        >
          {isExpanded && <h3>codebug</h3>}
          <SidebarTrigger />
        </div>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
