export const quiz = {
  quizTitle: 'Drone Operator Quiz',
  questions: [
    {
      question: 'As a basic operator, you can fly in unrestricted airspace and advisory airspace',
      questionType: 'text',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct: only advanced operators may fly in restricted airspace.',
      messageForInorrectAnswer: 'Incorrect: only advanced operators may fly in restricted airspace.'
    },
    {
      question: 'What is the most accurate definition of aerodrome? ',
      questionType: 'text',
      answers: [
        'Any space where flight operations take place. ',
        'Airspace for commercial flights. ',
        'The area around an airport. ',
        'The rounded window of a spaceship. '
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct!',
      messageForInorrectAnswer: 'Incorrect - An aerodrome is any space where flight operations take place. '
    }
  ]
};
