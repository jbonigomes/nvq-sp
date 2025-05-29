const aggregateModules = (modules) => ({
  length: Object.values(modules).flat().length,
  answered: Object.values(modules)
    .flat()
    .reduce((acc, { answer }) => acc + Number(!!answer), 0),
})

const aggregateEvidences = (evidences) => ({
  length: Object.values(evidences).reduce(
    (acc, { writeup, questions }) =>
      acc + questions.length + writeup.points.length + 1,
    0,
  ),
  answered: Object.values(evidences).reduce(
    (acc, { writeup, questions }) =>
      acc +
      Number(!!writeup.answer) +
      questions.filter(({ answer }) => answer).length +
      writeup.points.filter(({ checked }) => checked).length,
    0,
  ),
})
