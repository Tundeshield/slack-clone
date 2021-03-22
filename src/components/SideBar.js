import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

function SideBar() {
	return (
		<SideBarContainer>
			<SideBarHeader>
				<SideBarInfo>
					<h2>Dove Technologies</h2>
					<h3>
						<FiberManualRecordIcon />
						Tunde Adepegba
					</h3>
				</SideBarInfo>
				<CreateIcon />
			</SideBarHeader>
			<SidebarOption Icon={InsertCommentIcon} title="Threads" />
			<SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
			<SidebarOption Icon={DraftsIcon} title="Saved items" />
			<SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
			<SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
			<SidebarOption Icon={AppsIcon} title="Apps" />
			<SidebarOption Icon={FileCopyIcon} title="File browser" />
			<SidebarOption Icon={ExpandLessIcon} title="Show Less" />
			<hr />
			<SidebarOption Icon={ExpandMoreIcon} title="Channels" />
			<hr />
			<SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />
		</SideBarContainer>
	);
}

export default SideBar;

const SideBarContainer = styled.div`
	background-color: var(--slack-color);
	flex: 0.3;
	border-top: 1px solid #49274b;
	max-width: 260px;
	margin-top: 60px;
	color: white;

	> hr {
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px solid #49174b;
	}
`;
const SideBarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding: 13px;
	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: white;
		border-radius: 999px;
	}
`;
const SideBarInfo = styled.div`
	flex: 1;
	> h2 {
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 5px;
	}
	> h3 {
		display: flex;
		font-size: 13px;
		font-weight: 400;
		align-items: center;
	}
	> h3 > .MuiSvgIcon-root {
		font-size: 14px;
		margin-top: 1px;
		margin-right: 2px;
		color: green;
	}
`;
