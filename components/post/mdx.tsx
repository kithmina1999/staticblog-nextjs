import Image from 'next/image';
import React from 'react'
import * as runtime from 'react/jsx-runtime'
import { Callout } from './callout';

const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
}

const components = {
    Image,
    Callout
}
interface MDXComponentProps {
    code: string
}


const MDXComponent = ({ code }: MDXComponentProps) => {
    const Component = useMDXComponent(code)

    return (
        <Component components={components} />
    )
}

export default MDXComponent