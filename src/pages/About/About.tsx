import { observer } from 'mobx-react';
import { Header } from '../../components/Header';
import { AboutContext } from '../../store/About';
import { useStore } from '../../store/helpers';
import { Pages } from '../../store/helpers/arrayPages';

export const About = observer(() => {
    const store = useStore(AboutContext);
    const { about } = store;

    return (
        <div>
            <Header activePage={Pages.About}/>
            about
        </div>
    );
});
