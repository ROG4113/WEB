import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";


const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
    const [items, setItems] = useState([]);

    function handleAdd(item) {
        setItems(items => [...items, item]);
    }

    function handleDelete(id) {
        setItems(items => items.filter((item) => item.id !== id));
    }

    function handleToggle(id){
        setItems(items=>items.map(item=>item.id===id?{...item, packed:!item.packed}:item));
    }

    function handleReset(){
        const confirmed=window.confirm("Are you sure you want to delete all items?");

        confirmed && setItems([]);
    }

    return (
        <div>
            <Logo />
            <Form handleAdd={handleAdd} />
            <PackingList items={items} handleDelete={handleDelete} handleToggle={handleToggle} handleReset={handleReset}/>
            <Stats items={items}/>
        </div>
    );
}