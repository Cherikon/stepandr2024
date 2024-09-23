import React, {useState} from 'react';
import {Arrow, Header, ImagePlane, LastDiv, List, MainBlock} from "./styles";
import {Popup} from "./popup/Popup";
import Content from "./popup/Content";
import {Contents} from "./Contents";
import plane from './images/StepaPlane.png';
import arrow from './images/ArrowDown.svg'

export const App = () => {
    const [state, setState] = useState({
        isOpen: false,
        content: '',
        prelast: false
    });

    const closePopup = () => {
        setState(prevState => ({
            ...prevState,
            isOpen: false
        }))
    }
    return (
        <MainBlock>
            <Header>
                Способы не идти в армию<br/>
                Действующие и не очень<br/>
                (от чертил)
            </Header>
            <Popup isOpen={state.isOpen} closeModal={closePopup}>
                {state.content}
            </Popup>
            <List $isOverflow={!!state.prelast}>
                <h1>
                    Список:
                </h1>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.football}
                    />
                }))}>
                    Первый способ
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.mem}
                    />
                }))}>
                    Способ номер два
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.changePol}
                    />
                }))}>
                    Способ номер три
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.menLove}
                    />
                }))}>
                    Способ номер четыре
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.steal}
                    />
                }))}>
                    Пятый способ
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.polit}
                    />
                }))}>
                    Еще один способ
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.buket}
                    />
                }))}>
                    Красивый способ
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.horse}
                    />
                }))}>
                    Продуманный способ
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.god}
                    />
                }))}>
                    Божественный способ
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.pain}
                    />
                }))}>
                    Болезненный способ
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.old}
                    />
                }))}>
                    Способ двадцать три
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.small}
                    />
                }))}>
                    Сельский способ
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.old2}
                    />
                }))}>
                    Способ двенадцать
                </div>
                <div onClick={() => setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.failed}
                    />,
                    prelast: true
                }))}>
                    Ну и предпоследний совет
                </div>
                {
                    state.prelast &&
                    <LastDiv onClick={() => setState(prevState => ({
                        ...prevState,
                        isOpen: true,
                        content: <Content
                            {...Contents.final}
                        />
                    }))}>
                        Финальный совет
                    </LastDiv>
                }
                <ImagePlane src={plane} alt="plane" id="plane" title="Делай бизнес, детка!" $isLastOpen={!!state.prelast}/>
                {state.prelast &&
                    <Arrow src={arrow} alt="Стрелка вниз" className="arrowDown"/>}
            </List>
        </MainBlock>
    );
};

