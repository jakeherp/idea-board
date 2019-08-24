import React from "react"
import styled from "styled-components"

const Card = styled.li`
	background: #fff;
	border: 1px solid #eee;
	border-radius: 5px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	padding: 1rem;
	margin-bottom: 2rem;
	color: #000;
`

interface IProps {
	title: string
	description: string
}

const Idea = ({ title, description }: IProps) => {
	return (
		<Card>
			<h3>{title}</h3>
			<p>{description}</p>
		</Card>
	)
}

export default Idea
