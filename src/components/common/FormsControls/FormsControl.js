/**
 * Created by Dell on 28.10.2019.
 */
import React from 'react';
import classes from './FormsControl.module.css';

export const Input = ( {input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>&#9888; {meta.error}</span>}
        </div>
    )
}

/*
 import React from 'react';
 import classes from './FormsControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
    <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
        <div>
            <textarea {...input} {...props} />
        </div>
        { hasError && <span>&#9888; {meta.error}</span>}

    </div>
)
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>&#9888; {meta.error}</span>}

        </div>
    )
};
*/
