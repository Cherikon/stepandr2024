import React from 'react';
import {ContentBlock, H2, Image, ModalText, YMap} from "./styles";

const Content = ({
                     header, text, img, ps, map
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
            {map &&
                <YMap>
                    <a
                        href="https://yandex.ru/maps/org/ozon/177574490288/?utm_medium=mapframe&utm_source=maps"
                        style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>
                        Ozon</a>
                    <a
                        href="https://yandex.ru/maps/2/saint-petersburg/category/point_of_delivery/18955887118/?utm_medium=mapframe&utm_source=maps"
                        style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Пункт выдачи в
                        Санкт‑Петербурге
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?display-text=Ozon%2C%20%D0%BF%D1%83%D0%BD%D0%BA%D1%82%D1%8B%20%D0%B2%D1%8B%D0%B4%D0%B0%D1%87%D0%B8&ll=30.291862%2C59.943943&mode=search&oid=177574490288&ol=biz&sll=30.288981%2C59.943327&sspn=0.014276%2C0.004115&text=%7B%22text%22%3A%22Ozon%2C%20%D0%BF%D1%83%D0%BD%D0%BA%D1%82%D1%8B%20%D0%B2%D1%8B%D0%B4%D0%B0%D1%87%D0%B8%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%224550240290%22%5D%7D%5D%7D&z=15.91"
                        frameBorder="1" allowFullScreen={true}
                    />
                </YMap>}
        </ContentBlock>
    );
};

export default Content;