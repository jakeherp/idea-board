import React, { useState } from "react"
import styled from "styled-components"

const Form = styled.form`
	display: flex;
	flex-direction: column;

	input,
	textarea {
		padding: 0.5rem;
		font-size: 1rem;
		margin-bottom: 0.5rem;
		border-radius: 5px;
		border: none;
	}
	button {
		background: #e94057;
		padding: 0.5rem;
		color: #fff;
		border-radius: 5px;
		border: 1px solid #c13347;
		font-size: 1rem;
		cursor: pointer;
		&:hover {
			background: #c13347;
			border: 1px solid #c13347;
			box-sizing: border-box;
		}
	}
`

interface IProps {
	handlers: {
		handleTitle: any
		handleDescription: any
		addIdea: any
	}
	values: {
		newTitle: string
		newDescription: string
	}
}

const IdeaForm = ({
	handlers: { handleTitle, handleDescription, addIdea },
	values: { newTitle, newDescription },
}: IProps) => {
	const [active, setActive] = useState<boolean>(false)

	return (
		<Form onSubmit={addIdea}>
			<input
				value={newTitle}
				type="text"
				placeholder="Add an idea ..."
				onChange={handleTitle}
				onFocus={() => setActive(true)}
				style={
					!active
						? {
								opacity: 0.3,
						  }
						: {
								opacity: 1,
						  }
				}
			/>
			{active && (
				<React.Fragment>
					<textarea
						value={newDescription}
						onChange={handleDescription}
						placeholder="Add some more context"
					/>
					<button>Add</button>
				</React.Fragment>
			)}
		</Form>
	)
}

export default IdeaForm
