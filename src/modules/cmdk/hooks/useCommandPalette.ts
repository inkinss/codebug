import { useEffect, useState } from "react";

export function useCommandPaletteShortcut(initialOpen = false) {
  const [open, setOpen] = useState<boolean>(initialOpen);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const isMac = navigator?.platform?.toLowerCase().includes("mac");
      const modifierPressed = isMac ? e.metaKey : e.ctrlKey;

      if (modifierPressed && e.key === "k") {
        e.preventDefault();
        e.stopPropagation();
        setOpen((current) => !current);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return [open, setOpen] as const;
}
