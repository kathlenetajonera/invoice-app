import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <div className="ml-navbar min-h-screen bg-light-bg py-[4.5rem]">
            <div className="max-w-container mx-auto">{children}</div>
        </div>
    );
};

export default Container;
