import { observer } from 'mobx-react';

import React, { useState } from 'react';
import { UserAuthState } from '../constants/enum';
import LoginWindow from '../pages/Users/Login';
import { AuthContext, AuthProvider } from '../store/Auth';
import { useStore } from '../store/helpers';
import { Pages } from '../store/helpers/arrayPages';
import { HeaderContainer, HeaderItem, HeaderWrapped, LogIn } from '../styles/Header';

export const Header = observer(({ activePage }: { activePage: string }) => {
    const [isShowLoginWindow, setIsShowLoginWindow] = useState<boolean>(false);

    const { typeAuth } = useStore(AuthContext);

    // take control over the style of a component
    const [style, setStyle] = useState({});

    const setCoordinates = (x: number, y: number) => {
        // You don't need whitespace in here, I added it for readability
        // I would recommend using something like EmotionJS for this
        setStyle({
            position: 'absolute',
            left: `${x}px`,      
            top: `${y}px`,
        })
            
    }
    const openEditPage = (namePage: string) => {
        const location = window.location.href;
        const newLocation = location.slice(0, location.lastIndexOf(`${activePage.toLocaleLowerCase()}`)).concat(namePage).toLocaleLowerCase();
        if (location !== newLocation) {
            window.location.href = newLocation;
        }
    }

    const changeVisibilityLoginWindow = () => {
        setIsShowLoginWindow(!isShowLoginWindow);
        //setTimeout(() => {
            const textLoginEl = document.querySelector('#idTextLogin');
            const rectLoginEl = textLoginEl?.getBoundingClientRect();
            if (rectLoginEl) {
                setCoordinates(rectLoginEl.x + rectLoginEl.width + 15, rectLoginEl.y - 20);
            }
        //}, 20);
    }

    const isActive = (itemPage: string) => itemPage === activePage;
    return (
        <HeaderWrapped>
            <LogIn
                onClick={changeVisibilityLoginWindow}
                id={'idTextLogin'}
            >
                Login
            </LogIn>
            {isShowLoginWindow
                && <LoginWindow style={style} />
            }
            <HeaderContainer>
                {Object.keys(Pages).map((itemPage: string) => {
                    return <HeaderItem
                        className={isActive(itemPage) ? 'active' : ''}
                        onClick={() => openEditPage(itemPage)}
                    >
                        {itemPage}
                    </HeaderItem>
                })}
            </HeaderContainer>
        </HeaderWrapped>
    );
});
