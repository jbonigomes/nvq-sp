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
  evidences: [
    // data shape example
    // {
    //   id: 12345,
    //   writeup: '',
    //   title: '6.01',
    //   date: ['24', '11', '2025'],
    //   tools: [],
    //   gallery: [],
    //   materials: [],
    // },
  ],
}

export const getData = async () => {
  const data = JSON.parse((await Preferences.get({ key })).value)

  if (!data) {
    await Preferences.set({ key, value: JSON.stringify(initialData) })
  }

  return data ?? initialData
}
