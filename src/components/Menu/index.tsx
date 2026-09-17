import { HistoryIcon, HouseIcon, SettingsIcon, SummaryIcon, SunIcon, TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
     
     const [theme, setTheme] = useState<AvailableThemes>('dark');
     
     useEffect(() => {
          console.log('Valor de theme mudou', theme);     
          document.documentElement.setAttribute('data-theme', theme);

          return () => {
               console.log('Olha, este componente será atualizado');
          };

     },[theme] ); // Executa somente qudo valor de theme for alterado

     function HandleThemeChange(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
          
          event.preventDefault();
          
          setTheme( prevTheme => {
               const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
               return nextTheme;
          })        
    }    

    return (
        <>
          <nav className={styles.menu}>

               <h1>{theme}</h1>
               <a className={styles.menuLink} href='#' aria-label='Ir para a Home' title='Ir para a Home'>
                    <HouseIcon/>                    
               </a> 
               <a className={styles.menuLink} href='#' aria-label='Ver Histórico' title='Ver Histórico'>
                    <HistoryIcon/>                    
               </a> 
               <a className={styles.menuLink} href='#' aria-label='Configurações' title='Configurações'>
                    <SettingsIcon/>                    
               </a> 
               
               <a className={styles.menuLink} 
               href='#' 
               aria-label='Mudar tema' 
               title='Mudar tema'
               onClick={HandleThemeChange}>
                    <SunIcon/>                    
               </a> 

          </nav>
        </>
    )
}