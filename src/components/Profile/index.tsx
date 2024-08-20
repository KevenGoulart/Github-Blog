import { Buildings, GithubLogo, Link, Users } from 'phosphor-react'
import {
  LinkRedirect,
  ProfileContainer,
  ProfileInfoContainer,
  ProfileInfoGroup,
  ProfileTexts,
  ProfileTitle,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { ProfileContext } from '../../contexts/ProfileContext'

export function Profile() {
  const profile = useContextSelector(ProfileContext, (context) => {
    return context.profile
  })

  return (
    <ProfileContainer>
      <img src={profile?.avatar_url} alt="" />

      <ProfileTexts>
        <ProfileTitle>
          <h1>{profile?.name}</h1>

          <LinkRedirect>
            <a href={profile?.html_url} target="blank">
              GITHUB
            </a>
            <Link />
          </LinkRedirect>
        </ProfileTitle>

        <p>{profile?.bio}</p>

        <ProfileInfoContainer>
          <ProfileInfoGroup>
            <GithubLogo weight="fill" size={24} />
            <p>{profile?.login}</p>
          </ProfileInfoGroup>

          <ProfileInfoGroup>
            <Buildings weight="fill" size={24} />
            <p>{profile?.company}</p>
          </ProfileInfoGroup>

          <ProfileInfoGroup>
            <Users weight="fill" size={24} />
            <p>{profile?.followers} seguidores</p>
          </ProfileInfoGroup>
        </ProfileInfoContainer>
      </ProfileTexts>
    </ProfileContainer>
  )
}
