import * as fs from 'fs';

export interface Question {
  category: string;
  questionNumber: number;
  questionText: string;
  options: { text: string; isCorrect: boolean }[];
}

export async function parseQuestions(filePath: string): Promise<Question[]> {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Ошибка при загрузке файла');
      }
      const jsonData = await response.json();
      if (!Array.isArray(jsonData)) {
        throw new Error('Данные в файле не являются массивом');
      }
      const questions: Question[] = jsonData.map((item: any, index: number) => ({
        category: item.Category,
        questionNumber: index + 1,
        questionText: item.QuestionText,
        options: [
          { text: item.CorrectAnswer, isCorrect: true },
          ...item.IncorrectAnswers.map((incorrectAnswer: string) => ({
            text: incorrectAnswer,
            isCorrect: false
          }))
        ]
      }));
      return questions;
    } catch (error) {
      throw new Error(`Ошибка при загрузке и парсинге JSON: ${error}`);
    }
  }
  
  
