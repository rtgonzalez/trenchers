/* eslint-disable react/jsx-key */
import React from 'react';
import { GlobalBtnAnimated } from 'components/index';

const ButtonsAnimatedGroup = ({ btnsList }) => {
    return (
        <div className="btns-group pt-4">
            {btnsList.map((item) => (
                <GlobalBtnAnimated
                    buttonUrl={item.url}
                    urlText={item.title}
                    target={item.target}
                    btn="rounded-btn"
                    btnBg="btn-golden"
                    btnAnimated="btn-animated"
                    btnText="cstm-black-text"
                />
            ))}
        </div>
    );
};

export default ButtonsAnimatedGroup;
