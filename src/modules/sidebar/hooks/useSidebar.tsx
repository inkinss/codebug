import { useSidebar } from "@/components/ui/sidebar";

export const useSidebarState = () => {
    const { state } = useSidebar();
    const isExpanded = state === "expanded";
    return { isExpanded };
}