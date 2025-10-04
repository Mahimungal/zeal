import axios from "axios";

// URL for the API
const url = "http://localhost:9090/teacher";

class TeacherServiceDemo {
  // Fetch data
  getData() {
    return axios.get(url);  // Use the 'url' variable here
  }

  // Save data (post a new teacher)
  saveData(teacher) {
    return axios.post(url, teacher);  // POST request with the teacher object
  }

  // Update data (put request to update teacher by ID)
  updateData(teacher, id) {
    return axios.put(`${url}/${id}`, teacher);  // PUT request with teacher and ID
  }

  // Delete data (delete teacher by ID)
  deleteData(id) {
    return axios.delete(`${url}/${id}`);  // DELETE request with ID
  }
}

export default new TeacherServiceDemo();
