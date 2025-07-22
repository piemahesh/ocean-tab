interface GreetingData {
  studentName: string;
  phoneNumber: string;
}

interface SyllabusData extends GreetingData {
  courseName: string;
  syllabusLink: string;
}

const BASE_URL = "http://localhost:8080/api/v1";

export const SEND_GREETING = async (data: GreetingData) => {
  try {
    const response = await fetch(`${BASE_URL}/send-greeting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const SEND_SYLLABUS = async (data: SyllabusData) => {
  try {
    const response = await fetch(`${BASE_URL}/send-syllabus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};
