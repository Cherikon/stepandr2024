import React, {useState} from 'react';
import {Header, List, MainBlock} from "./styles";
import {Popup} from "./popup/Popup";
import Content from "./popup/Content";
import {Contents} from "./Contents";

export const App = () => {
    const [state, setState] = useState({
        isOpen: false,
        content: ''
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
            <List>
                <h1>
                    Список:
                </h1>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.football}
                    />
                }))}>
                    Первый способ
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.mem}
                    />
                }))}>
                    Способ номер два
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.changePol}
                    />
                }))}>
                    Способ номер три
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.menLove}
                    />
                }))}>
                    Способ номер четыре
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.steal}
                    />
                }))}>
                    Пятый способ
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.polit}
                    />
                }))}>
                    Еще один способ
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.buket}
                    />
                }))}>
                    Красивый способ
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.horse}
                    />
                }))}>
                   Продуманный способ
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.god}
                    />
                }))}>
                    Божественный способ
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.pain}
                    />
                }))}>
                    Болезненный способ
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.old}
                    />
                }))}>
                    Способ двадцать три
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.old2}
                    />
                }))}>
                    Способ двенадцать
                </div>
                <div onClick={() =>setState(prevState => ({
                    ...prevState,
                    isOpen: true,
                    content: <Content
                        {...Contents.failed}
                    />
                }))}>
                    Ну и последний совет
                </div>
            </List>
        </MainBlock>
    );
};

