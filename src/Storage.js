import config from "./config";

export default class StorageHandler {
  static handler = localStorage;
  static fieldName = "questions";
  static loading = false;
  static API_URL = `https://opentdb.com/api.php?amount=${config.question_count}&category=18&type=multiple`;

  constructor() {}

  static async loadFromAPI() {
    // dev: make sure no unwanted calls to the API
    // console.log("Call to load from API");

    this.loading = true;
    fetch(this.API_URL)
      .then((res) => res.json())
      .then((json) => JSON.stringify(json))
      .then((data) => {
        this.handler.setItem(this.fieldName, data);
        this.loading = false;
      });
  }

  static isLoaded() {
    if (this.loading) return true;
    let data = this.handler.getItem(this.fieldName);
    if (data && data.length && data.length > 0) return true;
    return false;
  }

  static getQuestions() {
    try {
      let data = JSON.parse(this.handler.getItem(this.fieldName));
      return data.results;
    } catch (e) {
      return false;
    }
  }

  static setAnswers(answers) {
    this.handler.setItem("answers", JSON.stringify(answers));
  }

  static getAnswers() {
    return JSON.parse(this.handler.getItem("answers"));
  }

  static clear() {
    this.handler.clear();
  }
}
