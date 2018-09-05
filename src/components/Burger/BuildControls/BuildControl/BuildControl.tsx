import * as React from 'react';
import * as css from './BuildControl.css';

const BuildControl = (props: any) => (
    <div className={css.BuildControl}>
        <div className={css.Label}>{props.label}</div>
        <button className={css.Less} onClick={props.remove} disabled={props.disabledControl}>Less</button>
        <button className={css.More} onClick={props.added}>More</button>
    </div>
)

export default BuildControl;
