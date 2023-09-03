// Write your code here
function getStudent(classRoom) {
  let [hasAssistnt, classList] = classRoom
  let teacher, assistnt, students

  if (hasAssistnt) {
    [teacher, assistnt, ...students] = classList
  } else {
    [teacher, ...students] = classList
  }
  return students
}
console.log(getStudent([true, ['rew', 'werwe', 'rewrw', 'werwer']]))
console.log(getStudent([false, ['rew', 'laly', 'somer', 'rats']]))