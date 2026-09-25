import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SummaryIcon, SunIcon, TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
     
     const [theme, setTheme] = useState<AvailableThemes>(() => {
          const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
          return storageTheme;
     });
     
     const nextThmeIcon = {
          dark  : <SunIcon/>,
          light : <MoonIcon/>
     };

     useEffect(() => {          
          document.documentElement.setAttribute('data-theme', theme);
          localStorage.setItem('theme', theme);
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
                    {nextThmeIcon[theme]}
               </a> 
               
          </nav>
        </>
    )
}