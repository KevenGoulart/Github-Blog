import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../contexts/PostsContext'
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js'
import { MagnifyingGlass } from 'phosphor-react'
import { SearchPostContainer } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const searchPostSchema = z.object({
  query: z.string(),
})

type SearchPostInputs = z.infer<typeof searchPostSchema>

export function SearchPost() {
  const fetchPosts = useContextSelector(PostsContext, (context) => {
    return context.fetchPosts
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchPostInputs>({
    resolver: zodResolver(searchPostSchema),
  })

  async function handleSearchPosts(data: SearchPostInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchPostContainer onClick={handleSubmit(handleSearchPosts)}>
      <input
        type="text"
        placeholder="Busque por posts"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchPostContainer>
  )
}
