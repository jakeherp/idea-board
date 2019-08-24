import React from "react"
import styled from "styled-components"
import Moment from "react-moment"

const Card = styled.li`
	background: #fff;
	border: 1px solid #eee;
	border-radius: 5px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	padding: 1rem;
	margin-bottom: 2rem;
	color: #000;
	width: 31%;
	min-width: 288px;
	flex-grow: 1;
	margin: 1rem;

	small {
		display: block;
		text-align: right;
	}
`

const Inline = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	padding-bottom: 1rem;

	h3 {
		margin: 0;
	}
	button {
		border: none;
		background: transparent;
		padding: 0;
		font-size: 1rem;
		color: #000;
		transition: 0.2s;
		&:hover {
			color: crimson;
		}
	}
`

interface IProps {
	id: number | null
	title: string
	description: string
	time: string
	removeIdea: any
}

const Idea = ({ id, title, description, time, removeIdea }: IProps) => {
	const confirm = (id: number | null, title: string): void => {
		window.confirm(`Delete ${title}?`) && removeIdea(id, title)
		return
	}

	return (
		<Card>
			<Inline>
				<h3>{title}</h3>
				<button onClick={() => confirm(id, title)}>&times;</button>
			</Inline>
			<p>{description}</p>
			<small>
				<Moment fromNow>{time}</Moment>
			</small>
		</Card>
	)
}

export default Idea
