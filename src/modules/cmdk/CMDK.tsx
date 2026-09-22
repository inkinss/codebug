"use client";

import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems } from "react-cmdk";
import { useState } from "react";
import { useCommandPaletteShortcut } from "./hooks/useCommandPalette";
import { buildCommandPaletteItems } from "./constants/filterItem";
import { RootPage } from "./components/RootPage";

const Example = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useCommandPaletteShortcut(false);
  const [search, setSearch] = useState("");

  const items = buildCommandPaletteItems({
    onNavigateToProjects: () => setPage("projects"),
    onLogout: () => alert("Logging out..."),
  });

  const filteredItems = filterItems(items, search);

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        <RootPage filteredItems={filteredItems} />
      </CommandPalette.Page>
    </CommandPalette>
  );
};

export default Example;
