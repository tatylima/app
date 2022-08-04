import { colors } from 'assets/styles/colors';
import { constants } from 'assets/styles/constants';
import { mixins } from 'assets/styles/mixins';

const theme = {
    colors,
    constants,
    mixins,
} as const;//(as)estou dando um apelido para theme, com o nome const//

export default theme;