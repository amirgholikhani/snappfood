import axios from "axios";

class AxiosClient {
  axiosInstance;

  constructor(apiKey, contentType = 'application/json') {
    this.axiosInstance = axios.create({
      headers: {
        // Authorization: `Bearer ${apiKey}`,
        Accept: '*/*',
        'Content-Type': contentType,
      },
      baseURL: 'https://snappfood.ir/mobile/v3',
    });
  }

  execute(requestConfig) {
    return this.axiosInstance(requestConfig);
  }
}

export default AxiosClient;
