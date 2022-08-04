import theme from 'assets/styles/theme';
type Theme = typeof theme;//Estou dizendo que esse tipo, é do tipo tema//

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}//expotando uma interface com o nome DefaultTheme do tipo Theme//