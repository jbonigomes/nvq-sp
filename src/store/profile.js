import { Preferences } from '@capacitor/preferences'

const key = 'nvqsp-profile'

export const resetProfile = async () => await Preferences.remove({ key })

export const getProfile = async () =>
  JSON.parse((await Preferences.get({ key })).value)

export const setProfileName = async (name) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, name }) })
}

export const setProfileLevel = async (level) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, level }) })
}

export const setProfileCourse = async (course) => {
  const store = await getProfile()
  await Preferences.set({
    key,
    value: JSON.stringify({ ...store, course, level: 'NVQ Level 3' }), // TODO: Remove this when levels are re-instated
  })
}
