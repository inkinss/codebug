import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";

interface RootPageProps {
  filteredItems: ReturnType<typeof filterItems>;
}

export const RootPage = ({ filteredItems }: RootPageProps) => {
  if (!filteredItems.length) {
    return <CommandPalette.FreeSearchAction />;
  }

  return (
    <>
      {filteredItems.map((list) => (
        <CommandPalette.List key={list.id} heading={list.heading}>
          {list.items.map(({ id, ...rest }) => (
            <CommandPalette.ListItem
              key={id}
              index={getItemIndex(filteredItems, id)}
              {...rest}
            />
          ))}
        </CommandPalette.List>
      ))}
    </>
  );
};
