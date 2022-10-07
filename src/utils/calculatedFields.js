const aggregateModules = (modules) => ({
  length: Object.values(modules).flat().length,
  answered: Object.values(modules).flat().reduce(
    (acc, { answer }) => acc + Number(!!answer),
    0,
  ),
})

const aggregateEvidences = (evidences) => ({
  length: Object.values(evidences).reduce(
    (acc, { writeup, questions }) =>
      acc + questions.length + writeup.points.length + 1,
    0,
  ),
  answered: Object.values(evidences).reduce(
    (acc, { writeup, questions }) =>
      acc
        + Number(!!writeup.answer)
        + questions.filter(({ answer }) => answer).length
        + writeup.points.filter(({ checked }) => checked).length,
    0,
  ),
})

export const calculateModulesProgress = ({ modules }) => {
  const { answered, length } = aggregateModules(modules)

  return {
    numerator: answered,
    denominator: length,
    progress: answered * 100 / (length || 1),
  }
}

export const calculateTotalProgress = ({ modules, evidences }) => {
  const modulesAgg = aggregateModules(modules)
  const evidencesAgg = aggregateEvidences(evidences)
  const totalLength = modulesAgg.length + evidencesAgg.length
  const totalAnswered = modulesAgg.answered + evidencesAgg.answered

  return totalAnswered * 100 / (totalLength || 1)
}
