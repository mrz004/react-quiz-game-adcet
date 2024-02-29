export function generateQuestionSequence(question) {
  const arr = [...question.incorrect_answers, question.correct_answer];
  const rand = Math.floor(Math.random() * arr.length);
  for (let i = 0; i < rand; i++) arr.unshift(arr.pop());
  return arr;
}
