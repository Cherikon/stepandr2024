import React from 'react';
import {ContentBlock, H2, Image, ModalText} from "./styles";

const Content = ({
                     header, text, img, ps
                 }) => {
    return (
        <ContentBlock>
            <H2>
                {header}
            </H2>
            <ModalText>
                {text}
            </ModalText>
            <Image src={img} alt=""/>
            {ps && <p>{ps}</p>}
        </ContentBlock>
    );
};

export default Content;