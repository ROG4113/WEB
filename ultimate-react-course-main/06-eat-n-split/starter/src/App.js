import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App() {
  const [addOpen, setAddOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAdd(newFriend) {
    setFriends([...friends, newFriend]);
    setAddOpen(false); 
  }

  function handleSelection(friend) {
    setSelectedFriend(cur=>cur?.id===friend.id?null:friend);
    setAddOpen(false);
  }

  function handleSplitBill(value){
    setFriends(friends=>friends.map(friend=>friend.id===selectedFriend.id?{...friend, balance:friend.balance + value}:friend))
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList addOpen={addOpen}
          friends={friends}
          handleSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {addOpen && <FormAddFriend handleAdd={handleAdd} />}

        <Button onClick={() => setAddOpen(!addOpen)}>{addOpen ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} handleSplitBill={handleSplitBill} />}
    </div>
  );
}

function FriendsList({ friends, handleSelection, selectedFriend }) {
  return <ul>
    {
      friends.map((friend) => (<Friend friend={friend} key={friend.id} handleSelection={handleSelection} selectedFriend={selectedFriend} />))
    }
  </ul>
}

function Friend({ friend, handleSelection, selectedFriend }) {
  const isSelected=selectedFriend?.id===friend.id;

  return (
    <li  className={isSelected?"selected":""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You owe {friend.name} {Math.abs(friend.balance)}$ </p>
      )
      }
      {friend.balance > 0 && (
        <p className="green">{friend.name} owes you {Math.abs(friend.balance)}$ </p>
      )
      }
      {friend.balance === 0 && (
        <p>You and {friend.name} are even </p>
      )
      }
      <Button onClick={()=>handleSelection(friend)}>{isSelected?"Close":"Select"}</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>{children}</button>
  );
}

function FormAddFriend({ handleAdd }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 }

    setName("");
    setImage("https://i.pravatar.cc/48");
    handleAdd(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭Friend Name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>🌆 Image URL</label>
      <input type="text" value={image} onChange={e => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({selectedFriend, handleSplitBill}) {
  const [bill, setBill]=useState(0);
  const [userExpense, setuserExpense]=useState(0);
  const [user, setUser]=useState("user");
  const friendExpense=bill-userExpense;
   
  function handleSubmit(e){
    e.preventDefault();

    if(!bill || !userExpense) return;
    handleSplitBill(user==="user"?friendExpense:-userExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={e=>setBill(Number(e.target.value))} />
      <label>💵 Your expense</label>
      <input type="text" value={userExpense} onChange={e=>setuserExpense(Number(e.target.value)>bill?userExpense:Number(e.target.value))}/>
      <label>👭 {selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />
      <label>🤑 Who is paying the bill</label>
      <select value={user} onChange={e=>setUser(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}