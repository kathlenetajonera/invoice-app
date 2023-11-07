type Props = {
    show: boolean;
    setShow: (val: boolean) => void;
};

const Overlay = ({ show, setShow }: Props) => {
    return (
        <div
            className={`fixed inset-0 bg-black dark:bg-gray transition-opacity duration-500 ${
                show
                    ? 'opacity-60 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setShow(false)}
        />
    );
};

export default Overlay;
