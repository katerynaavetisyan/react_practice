import "./styles.css";
import Greeter from "./Greeter";
import { Dog, add } from "./Dog";
add(1, 2);
export default function App() {
    return (
        <div className="App">
            <Greeter />
            <Dog />
            <Dog />
            <Greeter />
            <Greeter />
            <Greeter />
        </div>
    );
}
