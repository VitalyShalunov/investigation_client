import { observer } from 'mobx-react';
import { Header } from '../../Header/Header';
import { HeaderContainer } from '../../Header/HeaderContainer';
import { AboutContext } from '../../store/About';
import { useStore } from '../../store/helpers';
import { Pages } from '../../store/helpers/arrayPages';

export const About = observer(() => {
    const store = useStore(AboutContext);
    const { about } = store;

    return (
        <div>
            <HeaderContainer activePage={Pages.About}/>
            about
        </div>
    );
});
