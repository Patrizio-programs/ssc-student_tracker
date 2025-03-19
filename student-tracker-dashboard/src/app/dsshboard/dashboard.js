// src/app/dashboard/page.js
'use client';

import { useEffect, useState } from 'react';
import { getStudentData } from '../lib/api';

export default function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getStudentData();
      console.log(data); // Check the structure of the data
      setStudents(data);
    }
    fetchData();
  }, []);

  // Function to calculate overall progress
  const calculateProgress = (student) => {
    const topics = [
      student['Spanish Introduction'],
      student['Articles & Nouns'],
      student['Adjectives & Adverbs'],
      student['Verbs and Pronouns'],
      student['Contractions and Telling Time'],
      student['Miscellaneous Topics'],
    ];
  
    // Count the number of TRUE values (boolean true, not strings)
    const completed = topics.filter((topic) => topic === "TRUE").length;
  
    // Calculate the percentage of completed topics
    console.log(completed)

    return ((completed / topics.length) * 100).toFixed(2); // Return percentage with 2 decimal places
  };
  // Sort students by overall progress (descending order)
  const sortedStudents = [...students].sort((a, b) => {
    const progressA = calculateProgress(a);
    const progressB = calculateProgress(b);
    return progressB - progressA; // Sort from highest to lowest
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Student Progress Tracker</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Student Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Teacher Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Spanish Introduction</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Articles & Nouns</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Adjectives & Adverbs</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Verbs and Pronouns</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Contractions and Telling Time</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Miscellaneous Topics</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Overall Progress</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student['Student']}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student['Teacher']}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student['Spanish Introduction'] ? '✅' : '❌'}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student['Articles & Nouns'] ? '✅' : '❌'}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student['Adjectives & Adverbs'] ? '✅' : '❌'}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student['Verbs and Pronouns'] ? '✅' : '❌'}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student['Contractions and Telling Time'] ? '✅' : '❌'}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student['Miscellaneous Topics'] ? '✅' : '❌'}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{calculateProgress(student)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}