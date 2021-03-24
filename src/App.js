import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
	const [user, loading] = useAuthState(auth);

	return (
		<div className="App">
			<Router>
				{!user ? (
					<Login/>
				) : (
					<>
						<Header user={user}/>
						<AppBody>
							<SideBar />
							<Switch>
								<Route path="/" exact>
									<Chat />
									{/*chat*/}
								</Route>
							</Switch>
						</AppBody>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
