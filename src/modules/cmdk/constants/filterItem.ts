import { CommandPaletteGroup, BuildItemsParams } from "../types/cmdk";

export function buildCommandPaletteItems({
  onNavigateToProjects,
  onLogout,
}: BuildItemsParams): CommandPaletteGroup[] {
  return [
    {
      heading: "Home",
      id: "home",
      items: [
        { id: "home", children: "Home", icon: "HomeIcon", href: "#" },
        { id: "settings", children: "Settings", icon: "CogIcon", href: "#" },
        {
          id: "projects",
          children: "Projects",
          icon: "RectangleStackIcon",
          closeOnSelect: false,
          onClick: onNavigateToProjects,
        },
      ],
    },
    {
      heading: "Other",
      id: "advanced",
      items: [
        {
          id: "developer-settings",
          children: "Developer settings",
          icon: "CodeBracketIcon",
          href: "#",
        },
        {
          id: "privacy-policy",
          children: "Privacy policy",
          icon: "LifebuoyIcon",
          href: "#",
        },
        {
          id: "log-out",
          children: "Log out",
          icon: "ArrowRightOnRectangleIcon",
          onClick: onLogout,
        },
      ],
    },
  ];
}
