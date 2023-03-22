import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 0,
    author: {
      avatarUrl: 'https://github.com/AnnaBia.png',
      name: 'Ana Espejo',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal 🌱' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.' },
      { type: 'link', content: 'https://github.com/AnnaBia' }
    ],
    publishedAt: new Date('2023-03-22 14:00:00'),
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/iamtheluiz.png',
      name: 'Luiz Vasconcellos',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Saudações 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.' },
      { type: 'link', content: 'https://github.com/iamtheluiz' }
    ],
    publishedAt: new Date('2023-03-22 14:05:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

