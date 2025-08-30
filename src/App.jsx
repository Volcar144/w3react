import "./User.jsx";
import Profile from "./User.jsx";
import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
             You have clicked {count} times.
        </button>
    );
}

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);

function ShoppingList() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}



function App() {

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <h3>Profile Example</h3>
            <Profile />
            <hr />
            <h3>Button Example</h3>
            <p>Each one counts individually!!!</p>
            <MyButton />
            <MyButton />
            <hr />
            <h3>Dynamical Mapped list example</h3>
            <ul>{listItems}</ul>
            <hr />
            <h3>List Example with colours</h3>
            <ShoppingList />
        </div>
    );
}
export default App;