import web3 from './web3'
import ProjectFactory from './../build/contracts/ProjectFactory.json'

const instance = new web3.eth.Contract(
  ProjectFactory.abi,
  '0xC5b5462c3deD13593089ea6e54530A9da26cD904'
)

export default instance
