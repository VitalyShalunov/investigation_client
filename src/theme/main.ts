import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { grey } from '@material-ui/core/colors';

export const Main = createMuiTheme({
    palette: {
        primary: lightBlue,
    },
    overrides: {
        MuiSvgIcon: {
            fontSizeSmall: {
                fontSize: '16px',
            },
            colorPrimary: {
                color: 'orange',
            },
            colorSecondary: {
                color: grey[500],
            },
        },
    },
});

// primary - used to represent primary interface elements for a user. It's the color displayed most frequently across your app's screens and components.
// secondary - used to represent secondary interface elements for a user. It provides more ways to accent and distinguish your product. Having it is optional.
// error - used to represent interface elements that the user should be made aware of.
// warning - used to represent potentially dangerous actions or important messages.
// info - used to present information to the user that is neutral and not necessarily important.
// success - used to indicate the successful completion of an action that user triggered.