import styles from './styles.module.css'
type ContainerProps = {
    children:React.ReactNode;
}

export function Container({children} : ContainerProps): import("react").JSX.Element {

    return (
        <>          
          <div className={styles.container}>
            <div className={styles.content}>
                
                    {children}
                
            </div>
          </div>
        </>
    )

}