import { Preferences } from '@capacitor/preferences'

const key = 'nvqsp-data'

const initialData = {
  'Installation & Commissioning': {
    'NVQ Level 2': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: [],
          },
        ],
      },
      evidences: [
        {
          id: '6.01',
          writeup: '',
          date: '01/02/2025',
          tools: [],
          gallery: [],
          materials: [],
        },
        {
          id: '6.02',
          writeup: '',
          date: '04/05/2025',
          tools: [],
          gallery: [],
          materials: [],
        },
      ],
    },
    'NVQ Level 3': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: [],
          },
        ],
      },
      evidences: {},
    },
    'NVQ Level 4': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: [],
          },
        ],
      },
      evidences: {},
    },
  },
  'Maintenance & Service': {
    'NVQ Level 2': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: [],
          },
        ],
      },
      evidences: {},
    },
    'NVQ Level 3': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: [],
          },
        ],
      },
      evidences: {},
    },
    'NVQ Level 4': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: [],
          },
        ],
      },
      evidences: {},
    },
  },
}

export const getData = async ({ course, level }) => {
  const data = JSON.parse((await Preferences.get({ key })).value)

  if (!data) {
    await Preferences.set({ key, value: JSON.stringify(initialData) })
  }

  return data?.[course]?.[level] ?? initialData[course][level]
}
