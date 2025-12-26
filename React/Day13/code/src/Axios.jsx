import axios from "axios";  

const instance=axios.create({
  baseURL:"https://axiosproject-b0231-default-rtdb.asia-southeast1.firebasedatabase.app/",
})

export default instance;