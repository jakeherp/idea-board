import React, { useState, useEffect } from "react"
import ideaService from "./services/ideas"
import styled from "styled-components"

import Form from "./components/Form"
import Idea from "./components/Idea"
import Layout from "./components/Layout"
import Loader from "./components/Loader"

const List = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 -1rem;
`

interface IIdea {
	id: number | null
	title: string
	description: string
	time: string
}

const App: React.FC = () => {
	const [ideas, setIdeas] = useState<any>([])

	const [newTitle, setTitle] = useState("")
	const [newDescription, setDescription] = useState("")

	useEffect(() => {
		ideaService.getIdeas().then(res => {
			setIdeas(res.data)
		})
	}, [])

	const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
		setTitle(e.target.value)

	const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
		setDescription(e.target.value)

	const addIdea = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()

		ideaService
			.createIdea({
				id: ideas.length,
				title: newTitle,
				description: newDescription,
				time: new Date(),
			})
			.then(res => {
				setIdeas([...ideas, res.data])
			})
		resetForm()
	}

	const removeIdea = (id: number) => {
		ideaService.removeIdea(id).then(() => {
			const updatedIdeas = ideas.filter((idea: IIdea) => idea.id !== id)
			setIdeas(updatedIdeas)
		})
	}

	const resetForm = () => {
		setTitle("")
		setDescription("")
	}

	return (
		<Layout>
			<Form
				values={{ newTitle, newDescription }}
				handlers={{
					handleTitle,
					handleDescription,
					addIdea,
				}}
			/>
			{ideas.length > 0 ? (
				<List>
					{ideas
						.slice(0)
						.reverse()
						.map((idea: IIdea) => (
							<Idea
								key={idea.title}
								id={idea.id}
								title={idea.title}
								time={idea.time}
								description={idea.description}
								removeIdea={removeIdea}
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
