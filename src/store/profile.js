import { Preferences } from '@capacitor/preferences'

const key = 'nvqsp-profile'

export const resetProfile = async () => await Preferences.remove({ key })

export const getProfile = async () =>
  JSON.parse((await Preferences.get({ key })).value)

export const setProfileName = async (name) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, name }) })
}

export const setProfileEmail = async (email) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, email }) })
}

export const setProfileFirstAider = async (firstAider) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, firstAider }) })
}

export const setProfileLevel = async (level) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, level }) })
}

export const setProfileCourse = async (course) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, course }) })
}

export const setProfileSchool = async (school) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, school }) })
}

export const setProfileInstructor = async (instructor) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, instructor }) })
}
