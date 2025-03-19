import axios from 'axios';

export async function getStudentData() {
  const url = 'https://sheetdb.io/api/v1/bjqzyv1iixx14'; 
  const response = await axios.get(url);
  return response.data;
}