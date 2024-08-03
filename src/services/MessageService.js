import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:8080",
});

export default {
  getMessagesMock(id) {
    return [
      {
        id: 1,
        fromUsername: "cakelly4",
        toUsername: "bblevins96",
        timestamp: "2024-05-24T00:00:00",
        body: "Hello, how are you today?",
      },
      {
        id: 2,
        fromUsername: "bblevins96",
        toUsername: "cakelly4",
        timestamp: "2024-05-24T02:00:00",
        body: "I'm doing well, thank you for asking.",
      },
      {
        id: 3,
        fromUsername: "cakelly4",
        toUsername: "bblevins96",
        timestamp: "2024-05-24T02:02:00",
        body: "I'm glad to hear that. How is Charlie doing?",
      },
      {
        id: 4,
        fromUsername: "bblevins96",
        toUsername: "cakelly4",
        timestamp: "2024-05-24T02:10:00",
        body: "She's doing well, thank you for asking.",
      },
    ];
  },
  getMessagesByPatient(id, token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(http.getUri)
    let response = http.get(`/patients/${id}/messages`);
    return response;
  },
  getMessagesByTest(petId, testId, token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let response = http.get(`/patients/${petId}/tests/${testId}/messages`);
    return response;
  },
  sendMessage(message, token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let response = http.post(
      `/patients/${message.patientId}/messages`,
      message
    );
    return response;
  },
};
