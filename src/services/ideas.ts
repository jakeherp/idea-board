import axios from "axios"
const baseUrl = "https://my-json-server.typicode.com/jakeherp/idea-board/ideas"

const getIdeas = () => {
	return axios.get(baseUrl)
}

const createIdea = (newObject: object) => {
	return axios.post(baseUrl, newObject)
}

const updateIdea = (id: number, newObject: object) => {
	return axios.put(`${baseUrl}/${id}`, newObject)
}

const removeIdea = (id: number) => {
	return axios.delete(`${baseUrl}/${id}`)
}

export default {
	getIdeas,
	createIdea,
	updateIdea,
	removeIdea,
}
