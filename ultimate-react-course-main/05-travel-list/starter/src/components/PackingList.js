import { useState } from "react";
import Items from "./Items";

export default function PackingList({ items, handleDelete, handleToggle, handleReset }) {
    const[sortBy, setSortby]=useState("input");
    let sortedItems;
    if(sortBy==="input") sortedItems=items;
    if(sortBy==="description") sortedItems=items.slice().sort((a, b)=>a.description.localeCompare(b.description));
    if(sortBy==="packed") sortedItems=items.slice().sort((a, b)=>Number(a.packed)-Number(b.packed));

    return (
        <div className="list">
            <ul>
                {
                    sortedItems.map(item => <Items item={item} key={item.id} handleDelete={handleDelete} handleToggle={handleToggle} />)
                }
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={e=>setSortby(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={handleReset}>CLEAR LIST</button>
            </div>
        </div>
    );
}