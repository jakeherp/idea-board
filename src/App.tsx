import React, { useState, useEffect } from "react"
import ideaService from "./services/ideas"
import styled from "styled-components"

import Filter from "./components/Filter"
import Form from "./components/Form"
import Idea from "./components/Idea"
import Layout from "./components/Layout"
import Loader from "./components/Loader"

const List = styled.ul`
	list-style: none;
	padding: 0;
`

interface IIdea {
	id: number | null
	title: string
	description: string
	time: string
}

const App: React.FC = () => {
	const [ideas, setIdeas] = useState([])
	const [newIdea, setNewIdea] = useState<IIdea>({
		id: null,
		title: "",
		description: "",
		time: "",
	})

	useEffect(() => {
		ideaService.getIdeas().then(res => {
			setIdeas(res.data)
		})
	}, [])

	return (
		<Layout>
			{ideas.length > 0 ? (
				<List>
					{ideas.map((idea: IIdea) => (
						<Idea
							title={idea.title}
							description={idea.description}
						/>
					))}
				</List>
			) : (
				<Loader />
			)}
		</Layout>
	)
}

export default App
