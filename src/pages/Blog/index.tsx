import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { BlogContainer, PostCard, SearchHeader } from './styles'
import { PostsContext } from '../../contexts/PostsContext'
import { SearchPost } from './components/SearchPost'
import { dateFormatter } from '../../utils/formatter'

export function Blog() {
  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  return (
    <div>
      <Header />
      <Profile />

      <BlogContainer>
        <SearchHeader>
          <h1>Posts</h1>
          <p>
            {posts.length} {posts.length > 1 ? 'Posts' : 'Post'}
          </p>
        </SearchHeader>

        <SearchPost />
        <PostCard>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <a href={post.title}>
                  <h1>
                    <span>{post.title}</span>{' '}
                    <span>
                      {dateFormatter.format(new Date(post.created_at))}
                    </span>
                  </h1>
                  <p>{post.body}</p>
                </a>
              </div>
            )
          })}
        </PostCard>
      </BlogContainer>
    </div>
  )
}
