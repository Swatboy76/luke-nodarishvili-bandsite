class bandsiteAPI {
  constructor() {
    this.apiKey = "252c24f2-428e-465b-b389-fef033443d15";
    this.baseUrl = "https://project-1-api.herokuapp.com";
  }
  async getComments() {
    const response = await axios.get(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`
    );
    console.log(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
    let userComments = response.data;
    return userComments;
  }
}

export default bandsiteAPI;
