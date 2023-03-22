import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src="https://github.com/AnnaBia.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Ana Espejo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de Maio ás 08h13" dateTime="">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p className={styles.spacingLink}>
                    <a href="">#novoprojeto</a>
                    <a href="">#nlw</a>
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Comentário</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article >
    )
}