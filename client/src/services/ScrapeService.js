import { prop } from 'ramda'
import axios from 'axios'

export default class StationsService {
  async getPage () {
    return axios.get('http://localhost:8000/api/item').then(prop('data'))
  }
}
