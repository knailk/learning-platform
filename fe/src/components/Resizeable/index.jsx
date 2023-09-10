import React, { useState } from 'react';
import { Resizable } from 'react-resizable';

const Resizeable = ({ direction, children, widget }) => {
    console.log(widget);
    const [state, setState] = useState(widget);
    const onResize = (event, { node, size, handle }) => {
        setState({ width: size.width, height: size.height });
    };
    return (
        <Resizable height={state.height} width={state.width} onResize={onResize}>
            <div style={{ width: state.width + 'px', height: state.height + 'px' }}>{children}</div>
        </Resizable>
    );
};
export default Resizeable;
