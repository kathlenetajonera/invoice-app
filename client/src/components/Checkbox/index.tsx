import { StatusType } from '../StatusFilter';

type Props = {
    status: StatusType;
    onChange: (e: any) => void;
};

const Checkbox = ({ status, onChange }: Props) => {
    return (
        <label className="flex mb-4 cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={onChange}
            />
            <span className="block w-4 h-4 bg-[#dfe3fa] rounded-sm mr-3 bg-no-repeat transition-[background] bg-center peer-checked:bg-violet peer-checked:bg-check" />
            <p className="text-sm font-semibold capitalize">{status}</p>
        </label>
    );
};

export default Checkbox;
