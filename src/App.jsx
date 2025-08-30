import "./User.jsx";
import Profile from "./User.jsx";

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);

function App() {
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <h3>Profile Example</h3>
            <Profile />
            <hr />
            <h3>Button Example</h3>
            <MyButton />
            <hr />
            <h3>Dynamical Mapped list example</h3>
            <ul>{listItems}</ul>
        </div>
    );
}
export default App;