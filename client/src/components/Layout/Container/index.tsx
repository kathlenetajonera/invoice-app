import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <div className="ml-navbar min-h-screen bg-light-bg dark:bg-dark py-[4.5rem] lg:ml-0 lg:mt-navbar lg:py-10 lg:px-4">
            <div className="max-w-container mx-auto">{children}</div>
        </div>
    );
};

export default Container;
