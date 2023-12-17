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
  async postComments(newComment) {
    try {
      console.log("debug");
      const output = await axios.post(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`,
        newComment
      );
    } catch (error) {
      console.log("Something went wrong");
    }
  }
  async getShows() {
    const response = await axios.get(
      `${this.baseUrl}/showdates?api_key=${this.apiKey}`
    );
    console.log(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
    let showsList = response.data;
    return showsList;
  }
}

export default bandsiteAPI;
