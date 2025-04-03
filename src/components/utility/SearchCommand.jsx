import React, { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const searchFruit = [
  { firstName: "Apple", id: 1 },
  { firstName: "Apricat", id: 2 },
  { firstName: "Avocada", id: 3 },
  { firstName: "Banana", id: 4 },
  { firstName: "BlackBerry", id: 5 },
  { firstName: "Calculator", id: 6 },
  { firstName: "Calendar", id: 7 },
];
function SearchCommand() {
  //const [open, setOpen] = useState(false);
  const [searchItems, setsearchItems] = useState();

  //const [name, setName] = useState("");
  const [filteredFruits, setFilteredFruits] = useState(searchFruit);
  // useEffect(() => {
  //   // const down = (e: KeyboardEvent) => {
  //   //   if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
  //   //     e.preventDefault();
  //   //     setOpen((open) => !open);
  //   //   }
  //   // };
  //   // fetch("https://api.imgflip.com/get_memes")
  //   //   .then((res) => res.json())
  //   //   .then((result) => {
  //   //     setAllMemes(result.data.memes);
  //   //   });
  //   //setOpen((open) => !open);
  // }, []);
  const handleChange = (e) => {
    const searchItems = e.target.value;
    setsearchItems(searchItems);
    //setOpen(searchItems);
    const filteredItems = searchFruit.filter((fruit) =>
      fruit.firstName.toLowerCase().includes(searchItems.toLowerCase())
    );

    setFilteredFruits(filteredItems);
    //setFilteredFruits([]);
  };

  return (
    <div>
      <Command className="rounded-lg border w-[250px]">
        <CommandInput
          placeholder="Type a command or search..."
          value={searchItems}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        {/* <CommandDialog> */}
        <CommandList>
          {/* <CommandEmpty>No results found.</CommandEmpty> */}
          {open &&
            filteredFruits.length > 0 &&
            filteredFruits.map((fruit) => (
              <CommandItem key={fruit.id}>
                <span> {fruit.firstName}</span>
              </CommandItem>
            ))}
        </CommandList>
        {/* </CommandDialog> */}
      </Command>
      {/* <CommandGroup heading="Suggestions">
              // <CommandItem>Apple</CommandItem>
              // <CommandItem>Apricat</CommandItem>
              // <CommandItem>Avocada</CommandItem>
              // <CommandItem>Banana</CommandItem>
              // <CommandItem>BlackBerry</CommandItem>
              // <CommandItem>Calculator</CommandItem>
              // <CommandItem>Calendar</CommandItem>
              //{" "} */}
    </div>
  );
}

export default SearchCommand;
