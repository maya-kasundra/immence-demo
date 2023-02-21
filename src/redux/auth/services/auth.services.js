import commonAPI from '../../../api/common'
import { authEndPoint } from '../../../api/api-end-point'

class authService {
  post(endPoint, data) {
    return commonAPI.post(`${authEndPoint}/${endPoint}`, data)
    // https://api.immence.com/v1/auth/${endPoint}"
  }
}
export default new authService()
