import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { db } from "../firebase";
import firebase from "firebase";

function ChatInput({ channelId, channelName, chatRef }) {
	const [input, setInput] = useState("");

	const sendMessage = (e) => {
		e.preventDefault();
		console.log(channelId);
		if (!channelId) {
			return false;
		}
		db.collection("rooms").doc(channelId).collection("messages").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: "Tunde Adepegba",
			userImage:
				"https://qph.fs.quoracdn.net/main-thumb-148799410-200-btdvzgvvsxtcweovbwcglzxomhbbcfkh.jpeg",
		});

		chatRef.current.scrollIntoView({
			behavior: "smooth",
		});
		setInput("");
	};
	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message ${channelName}`}
				/>
				<Button type="submit" onClick={sendMessage} hidden>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 20px;
	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}
	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid gray;
		border-radius: 3px;
		padding: 20px;
		outline: none;
	}
	> form > button {
		display: none;
	}
`;