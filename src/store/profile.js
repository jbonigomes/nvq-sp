import { Preferences } from '@capacitor/preferences'

const key = 'nvqsp-profile'

const initialProfile = {
  name: '',
  email: '',
  school: '',
  location: '',
  instructor: '',
  firstAider: '',
}

export const getProfile = async () => {
  const profile = JSON.parse((await Preferences.get({ key })).value)

  if (!profile) {
    await Preferences.set({ key, value: JSON.stringify(initialProfile) })
  }

  return profile ?? initialProfile
}

export const setProfileName = async (name) => {
  const profile = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...profile, name }) })
}

export const setProfileEmail = async (email) => {
  const profile = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...profile, email }) })
}

export const setProfileLocation = async (location) => {
  const profile = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...profile, location }) })
}

export const setProfileFirstAider = async (firstAider) => {
  const profile = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...profile, firstAider }) })
}

export const setProfileSchool = async (school) => {
  const profile = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...profile, school }) })
}

export const setProfileInstructor = async (instructor) => {
  const profile = await getProfile()
  await Preferences.set({ key, value: JSON.stringify({ ...profile, instructor }) })
}
