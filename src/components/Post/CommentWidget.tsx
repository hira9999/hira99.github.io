import React, { createRef, useEffect } from 'react'

type Attributes = {
  src: string
  repo: string
  'issue-term': string
  theme: string
  crossorigin: string
  async: string
}

const src = 'https://utteranc.es/client.js'
const repo = 'hira9999/hira99.github.io'

const CommentWidget = () => {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return
    const utterances: HTMLScriptElement = document.createElement('script')
    const attributes: Attributes = {
      src,
      repo,
      'issue-term': 'pathname',
      theme: 'github-dark',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).map(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <div className="" ref={element} />
}

export default CommentWidget
