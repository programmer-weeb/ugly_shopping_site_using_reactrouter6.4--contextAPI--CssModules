import { Link } from "react-router-dom";

export default function Home() {
    return <div>
        <h1>Home</h1>
        <h3>some links</h3>
        <Link to='/shopping'>shopping</Link>
    </div>
}
