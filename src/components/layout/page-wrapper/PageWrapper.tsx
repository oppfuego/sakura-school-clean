import React, {FC} from 'react';
import {PageWrapperProps} from "@/types/page-wrapper";

const PageWrapper: FC<PageWrapperProps> = ({children}) => {
    return (
        <main className="page-wrapper">
            {children}
        </main>
    );
};

export default PageWrapper;