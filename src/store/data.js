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
            answer: '',
          },
        ],
      },
      evidences: {
        6.01: {
          writeup: {
            points: [
              { label: 'Point 1', checked: false },
              { label: 'Point 2', checked: false },
            ],
            answer: '',
          },
          questions: [
            {
              question: 'Question 1?',
              options: [],
              answer: '',
            },
          ],
        },
      },
    },
    'NVQ Level 3': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: '',
          },
        ],
        // QICM002: [
        //   {
        //     question: 'Question 1',
        //     options: [],
        //     answer: '',
        //   },
        // ],
      },
      evidences: {
        6.01: {
          writeup: {
            points: [
              { label: 'Point 1', checked: false },
              { label: 'Point 2', checked: false },
            ],
            answer: '',
          },
          questions: [
            {
              question: 'Question 1?',
              options: [],
              answer: '',
            },
          ],
        },
      },
    },
    'NVQ Level 4': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: '',
          },
        ],
      },
      evidences: {
        6.01: {
          writeup: {
            points: [
              { label: 'Point 1', checked: false },
              { label: 'Point 2', checked: false },
            ],
            answer: '',
          },
          questions: [
            {
              question: 'Question 1?',
              options: [],
              answer: '',
            },
          ],
        },
      },
    },
  },
  'Maintenance & Service': {
    'NVQ Level 2': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: '',
          },
        ],
      },
      evidences: {
        6.01: {
          writeup: {
            points: [
              { label: 'Point 1', checked: false },
              { label: 'Point 2', checked: false },
            ],
            answer: '',
          },
          questions: [
            {
              question: 'Question 1?',
              options: [],
              answer: '',
            },
          ],
        },
      },
    },
    'NVQ Level 3': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: '',
          },
        ],
      },
      evidences: {
        6.01: {
          writeup: {
            points: [
              { label: 'Point 1', checked: false },
              { label: 'Point 2', checked: false },
            ],
            answer: '',
          },
          questions: [
            {
              question: 'Question 1?',
              options: [],
              answer: '',
            },
          ],
        },
      },
    },
    'NVQ Level 4': {
      modules: {
        QICM001: [
          {
            question: 'Question 1',
            options: [],
            answer: '',
          },
        ],
      },
      evidences: {
        6.01: {
          writeup: {
            points: [
              { label: 'Point 1', checked: false },
              { label: 'Point 2', checked: false },
            ],
            answer: '',
          },
          questions: [
            {
              question: 'Question 1?',
              options: [],
              answer: '',
            },
          ],
        },
      },
    },
  },
}

export const getData = async ({ course, level }) => {
  const data = JSON.parse((await Preferences.get({ key })).value)

  if (!data) {
    await Preferences.set({ key, value: JSON.stringify(initialData) })
  }

  return data[course][level] || initialData[course][level]
}
