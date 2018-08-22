import axios from "axios";

const BASE_URL = "";

export default () => {
  return {
    /*   */
    saveRule(rule) {
      return axios
        .post(BASE_URL + "", {rule})
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
};
