import { Suspense } from "react";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import ChatWrapper from "./chat/ChatWrapper";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent className="h-full w-full bg-white">
        {/* Loading suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* AI Chat Twin */}
          <ChatWrapper />
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
