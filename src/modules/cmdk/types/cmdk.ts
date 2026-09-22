export interface CommandPaletteGroup {
  heading: string;
  id: string;
  items: any;
}

export interface BuildItemsParams {
  onNavigateToProjects: () => void;
  onLogout: () => void;
}
