import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://img.freepik.com/fotos-gratis/bela-paisagem-de-um-rio-cercado-por-muito-verde-em-uma-floresta_181624-40482.jpg?w=500&t=st=1679432051~exp=1679432651~hmac=8c128fcbdb9ac5fbe91d7681aacdb3f3c86ffebffb00c7ad232bb6a4cae85ab3"
            />
            <div className={styles.profile}>
                <strong>Ana Espejo</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}