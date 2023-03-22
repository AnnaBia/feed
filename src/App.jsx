import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ana Espejo"
            content="Primeiro teste"
          />
          <Post
            author="Luiz Vasconcellos"
            content="Segundo teste"
          />
        </main>
      </div>
    </div>
  )
}

