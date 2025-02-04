import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("");
  
  // TODO 2: Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(["Home", "About", "Services", "Contact"]);
  
  let [filter, setFilter] = useState("");

  // TODO 3: Add a new menu item to the correct variable associated with this class.
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems([newMenuItem, ...menuItems]); // Add new item at the beginning
      setNewMenuItem(""); // Clear input after adding
    }
  }, [newMenuItem, menuItems]); 

  // TODO 4: Display ONLY the menu items that contain the filter element value "filter".
  let filteredItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  // TODO 1: Render inside the outer div an unordered list of the menu items, with each string in the array as its own item.
  return (
    <div>
      <h2>Menu</h2>

      {/* Input to add a new menu item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Add menu item"
      />
      <button onClick={addMenuItem}>Add Item</button>

      <br />

      {/* Input to filter menu items */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />

      {/* Render filtered menu items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
