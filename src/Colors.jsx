import logoLight from '../public/Lili.dev_light.svg';
import logoDark from '../public/Lili.dev_dark.svg';

const lightTheme = {
    text: 'black',
    backgroundImage: 'url("bg-light.jpg")',
    backgroundColorMobile: '#FFFFF',
    skillsBackground: '#f6f2ff',
    NavBackground: 'transparent',
    border: '1px solid #ba9fff',
    NavBackgroundScroll: '#f6f2ff',
    logoImage: logoLight,
  };
  
const darkTheme = {
    background: '#16181a',
    text: '#F4FAFF',
    NavBackgroundScroll: '#1b1c1d',
    logoImage: logoDark,
  };
  
  export { lightTheme, darkTheme };
  