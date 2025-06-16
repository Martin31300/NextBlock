import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./Components/footer";

function App() {
	const [isBeginner, setIsBeginner] = useState<Boolean>(true);
	return (
		<>
			<Outlet context={{ isBeginner, setIsBeginner }} />
			<Footer />
		</>
	);
}

export default App;
