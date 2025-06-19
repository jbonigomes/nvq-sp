import { Preferences } from '@capacitor/preferences'

const key = 'nvqsp-data'

const initialData = {
  modules: {
    QICM001: [
      {
        question: 'Question 1',
        options: ['A', 'B', 'C'], // if empty array, it is a write up question
        answer: ['A', 'B'], // if string, it is a single select question
        userAnswer: [],
      },
    ],
    QICM002: [
      {
        question: 'Question 1',
        options: [], // if empty array, it is a write up question
        answer: '', // if string, it is a single select question
        userAnswer: '',
      },
    ],
    QICM003: [
      {
        question: 'Question 1',
        options: ['A', 'B', 'C'], // if empty array, it is a write up question
        answer: 'A', // if string, it is a single select question
        userAnswer: [],
      },
    ],
    QICM004: [
      {
        question: 'Question 1',
        options: [], // if empty array, it is a write up question
        answer: [], // if string, it is a single select question
        userAnswer: [],
      },
    ],
    QICM005: [
      {
        question: 'Question 1',
        options: [], // if empty array, it is a write up question
        answer: [], // if string, it is a single select question
        userAnswer: [],
      },
    ],
    QICM006: [
      {
        question: 'Question 1',
        options: [], // if empty array, it is a write up question
        answer: [], // if string, it is a single select question
        userAnswer: [],
      },
    ],
  },
  evidences: [],
}

export const getData = async () => {
  const data = JSON.parse((await Preferences.get({ key })).value)

  if (!data) {
    await Preferences.set({ key, value: JSON.stringify(initialData) })
  }

  return data ?? initialData
}

export const addEvidence = async ({ firstAider, location }) => {
  const now = new Date()
  const id = `${now.valueOf()}`
  const data = JSON.parse((await Preferences.get({ key })).value)

  const payload = {
    ...data,
    evidences: [
      ...data.evidences,
      {
        id,
        location,
        firstAider,
        title: '',
        writeup: '',
        tools: [],
        gallery: [],
        materials: [],
        date: [
          `${now.getDate()}`,
          `${now.getMonth() + 1}`,
          `${now.getFullYear()}`,
        ],
      },
    ],
  }

  await Preferences.set({ key, value: JSON.stringify(payload) })

  return id
}

export const deleteEvidence = async (id) => {
  const data = JSON.parse((await Preferences.get({ key })).value)
  await Preferences.set({
    key,
    value: JSON.stringify({
      ...data,
      evidences: data.evidences.filter((e) => e.id !== id),
    }),
  })
}
