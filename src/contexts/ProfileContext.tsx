import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Profile {
  id: number
  name: string
  html_url: string
  avatar_url: string
  followers: string
  company: string
  login: string
  bio: string
}

interface ProfileContextType {
  profile?: Profile
  fetchProfile: (query?: string) => Promise<void>
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile>()

  const fetchProfile = useCallback(async (query?: string) => {
    const response = await api.get('/users/kevengoulart', {
      params: {
        q: query,
      },
    })

    setProfile(response.data)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <ProfileContext.Provider value={{ profile, fetchProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}
