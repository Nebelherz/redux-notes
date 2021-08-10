import axios from 'axios'

const baseUrl = 'https://60dc8bf9c2b6280017febacf.mockapi.io/api/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
} 

const createNew = async (note) => {
  const object = note
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateNote = async (id, note) => {
  const response = await axios.put(baseUrl + '/' + id, note)
  return response.data
}

export default { getAll, createNew, updateNote }
