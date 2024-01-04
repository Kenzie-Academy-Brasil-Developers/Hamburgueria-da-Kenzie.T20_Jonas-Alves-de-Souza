import { forwardRef } from "react";

export const Input = forwardRef(({label, ...rest}, ref) => {
    return(
        <div>
            <label>
                {label}
                <input {...rest} ref={ref}/>
            </label>
        </div>
    )
})