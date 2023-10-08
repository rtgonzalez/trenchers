import React from 'react';
import styles from './GlobalBtnAnimated.module.scss';
import { GlobalBtnAnimated } from 'components/index';

const ButtonsAnimatedGroup = ({ btnsList }) => {
    return (
        <div className={styles['btns-group']}>
            {btnsList.map((item) => (
                <GlobalBtnAnimated
                    buttonUrl={item.url}
                    urlText={item.title}
                    target={item.target}
                    btn="btn"
                    btnBg="btn-golden"
                    btnAnimated="btn-animated"
                    btnText="white-text"
                />
            ))}
        </div>
    );
};

export default ButtonsAnimatedGroup;
