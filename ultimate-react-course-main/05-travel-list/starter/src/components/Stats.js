export default function Stats({items}) {
    if(!items.length){
        return(
            <p className="stats"> Start adding some items to your packing list 🚀</p>
        );
    }
    const numItems=items.length;
    const packed=items.filter((cur)=>cur.packed).length;
    const percentage=numItems>0?(packed/numItems)*100:0;
    return (
        <footer className="stats">
            {percentage===100?
            <em>You got everthing! Ready to go ✈️</em>
            :<em>You have {numItems} items on your list, and you already packed {packed}({percentage}%)</em>}
        </footer>
    );
}