import axios from 'axios'

const ApiUrl = 'https://api-sofia-hair.herokuapp.com/product'

const getAll = async () => {
   const res = await axios.get(ApiUrl)
   return res.data
}

export { getAll }
