// Crie um projeto novo e instale a biblioteca axios.
// - Consuma a lista de posts através do endpoint https://jsonplaceholder.typicode.com/posts.
// - Agora que você tem a lista de posts, consulte o primeiro post da lista.
// - Cadastre um novo post enviando um objeto com os atributos title e body para o endpoint
//  https://jsonplaceholder.typicode.com/posts.
// - Faça a edição de um post enviando novos atributos title e body para o post com id 1.
// - Faça a exclusão do primeiro post vindo da listagem de posts.

import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/'

const getAllPosts = async () => {
  try {
    const response = await axios.get(URL + 'posts')
    console.log('GET', response.data)
  } catch (error) {
    console.log(error.message)
  }
}

getAllPosts()
//-----------------------------------------------

const getFirstPost = async () => {
  try {
    const response1 = await axios.get(response1)
    console.log('GET FIRST POST', response1.data)
  } catch (error) {
    console.log(error.message)
  }
}

getFirstPost()

//*-*************************-------------------------

const newPost = async () => {
  try {
    const blogPost = {
      title: 'Título do meu post',
      body: 'Conteúdo do meu post',
      userId: 2,
      id: 1,
    }
    const response = await axios.put(URL + 'posts/1', blogPost)
    console.log('PUT NEW POST', response.data)
  } catch (error) {
    console.log(error.message)
  }
}

newPost()
