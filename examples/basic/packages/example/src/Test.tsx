import React from "react";
import {useNode} from "@craftjs/core";

export const Test = () => {
    const {connectors: {connect, drag}} = useNode();
    return <div ref={ref => connect(drag(ref!))}>Hello</div>;
}
