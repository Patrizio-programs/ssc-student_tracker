// src/app/data-entry/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DataEntry() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentName: '',
    teacherName: '',
    spanishIntroduction: false,
    articlesNouns: false,
    adjectivesAdverbs: false,
    verbsPronouns: false,
    contractionsTime: false,
    miscellaneousTopics: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://sheetdb.io/api/v1/bjqzyv1iixx14', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              'Student Name': formData.studentName,
              'Teacher Name': formData.teacherName,
              'Spanish Introduction': formData.spanishIntroduction, // Send TRUE or FALSE
              'Articles & Nouns': formData.articlesNouns, // Send TRUE or FALSE
              'Adjectives & Adverbs': formData.adjectivesAdverbs, // Send TRUE or FALSE
              'Verbs and Pronouns': formData.verbsPronouns, // Send TRUE or FALSE
              'Contractions and Telling Time': formData.contractionsTime, // Send TRUE or FALSE
              'Miscellaneous Topics': formData.miscellaneousTopics, // Send TRUE or FALSE
            },
          ],
        }),
      });
  
      if (response.ok) {
        alert('Student added successfully!');
        router.push('/'); // Redirect to the dashboard
      } else {
        alert('Failed to add student.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the student.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Teacher Name:</label>
          <input
            type="text"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            required
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="spanishIntroduction"
              checked={formData.spanishIntroduction}
              onChange={handleChange}
            />
            Spanish Introduction
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="articlesNouns"
              checked={formData.articlesNouns}
              onChange={handleChange}
            />
            Articles & Nouns
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="adjectivesAdverbs"
              checked={formData.adjectivesAdverbs}
              onChange={handleChange}
            />
            Adjectives & Adverbs
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="verbsPronouns"
              checked={formData.verbsPronouns}
              onChange={handleChange}
            />
            Verbs and Pronouns
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="contractionsTime"
              checked={formData.contractionsTime}
              onChange={handleChange}
            />
            Contractions and Telling Time
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="miscellaneousTopics"
              checked={formData.miscellaneousTopics}
              onChange={handleChange}
            />
            Miscellaneous Topics
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none' }}>
          Add Student
        </button>
      </form>
    </div>
  );
}