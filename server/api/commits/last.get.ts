interface GithubCommit {
  sha: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    message: string
  }
  html_url: string
}

const fetchGithubLastCommit = defineCachedFunction(async () => {
  try {
    const res = await $fetch<GithubCommit[]>('https://api.github.com/repos/ClemCornet/clemc.dev/commits', {
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      query: {
        per_page: 1,
      },
    })

    if (!res || res.length === 0) {
      throw new Error('No commits found')
    }

    const lastCommit = res[0]

    return {
      sha: lastCommit.sha,
      message: lastCommit.commit.message,
      author: lastCommit.commit.author.name,
      date: lastCommit.commit.author.date,
      url: lastCommit.html_url,
    }
  }
  catch {
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch latest commit',
    })
  }
}, {
  group: 'github',
  name: 'last-commit',
  maxAge: 60 * 60,
})

export default eventHandler(async () => {
  const lastCommit = await fetchGithubLastCommit()

  return lastCommit
})
