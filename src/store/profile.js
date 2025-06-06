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

export const setProfileLocation = async (location) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, location }) })
}

export const setProfileFirstAider = async (firstAider) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, firstAider }) })
}

export const setProfileSchool = async (school) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, school }) })
}

export const setProfileInstructor = async (instructor) => {
  const store = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...store, instructor }) })
}
