import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { PostsContext } from '../../contexts/PostsContext'
import { NavLink, useParams } from 'react-router-dom'
import {
  ButtonRedirect,
  Buttons,
  HeaderSpecific,
  InfoContainer,
  Sub,
  SubData,
} from './styles'
import {
  ArrowLeft,
  Calendar,
  ChatCircle,
  GithubLogo,
  LinkSimple,
} from 'phosphor-react'
import { ProfileContext } from '../../contexts/ProfileContext'
import { dateFormatter } from '../../utils/formatter'

export function SpecificPost() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  const profile = useContextSelector(ProfileContext, (context) => {
    return context.profile
  })

  const { title } = useParams()
  const postInfo = posts.find((post) => post.title === title) ?? {
    title: 'Título não disponível',
    html_url: '/',
    created_at: 0,
    comments: 0,
    body: 'Conteúdo não disponível',
  }

  return (
    <div>
      <Header />
      <HeaderSpecific>
        <Buttons>
          <ButtonRedirect>
            <NavLink to={'/'}>
              <ArrowLeft size={20} />
              Voltar
            </NavLink>
          </ButtonRedirect>

          <ButtonRedirect>
            <NavLink to={postInfo.html_url} target="blank">
              Ver no GITHUB
              <LinkSimple size={20} />
            </NavLink>
          </ButtonRedirect>
        </Buttons>
        <h1>{postInfo.title}</h1>
        <SubData>
          <Sub>
            <GithubLogo size={20} weight="fill" />
            {profile?.login}
          </Sub>
          <Sub>
            <Calendar size={20} weight="fill" />
            {dateFormatter.format(new Date(postInfo.created_at))}
          </Sub>
          <Sub>
            <ChatCircle size={20} weight="fill" />
            {postInfo.comments} comentários
          </Sub>
        </SubData>
      </HeaderSpecific>

      <InfoContainer>
        <p>{postInfo.body}</p>
      </InfoContainer>
    </div>
  )
}
