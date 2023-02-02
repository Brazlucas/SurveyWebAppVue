import axios from "axios"

class InspectionService {
  public getSteps() {
    const API_URL = "https://dev-1s6qn3x642oxnn4.api.raw-labs.com/mock"
    return axios.get(API_URL).then((results) => {
      return results
    })
  }

}

export default new InspectionService();