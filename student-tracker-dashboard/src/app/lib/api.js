import axios from 'axios';

export async function getStudentData() {
  const url = 'https://sheetdb.io/api/v1/bjqzyv1iixx14'; 
  const response = await axios.get(url);
  return response.data;

}


// DELETE STUDENT
export async function deleteStudent(studentName) {
    const url = 'https://sheetdb.io/api/v1/bjqzyv1iixx14';
    try {
      const response = await axios.delete(url, {
        data: {
          Student: studentName
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }