import { useEffect, useRef, useState } from 'react';
import { InvoiceType } from '../InvoiceForm/types';
import Checkbox from '../Checkbox';
import ArrowDown from '../Icons/ArrowDown';

type Props = {
    invoices: InvoiceType[];
    setInvoicesToRender: (data: InvoiceType[]) => void;
};

export type StatusType = 'draft' | 'pending' | 'paid';

const StatusFilter = ({ invoices, setInvoicesToRender }: Props) => {
    const [statusList, setStatusList] = useState<StatusType[]>([]);
    const [filters, setFilters] = useState<StatusType[]>([]);
    const [showFilter, setShowFilter] = useState(false);
    const ref = useRef(null);

    const getInvoiceStatus = () => {
        const statusArr = invoices.map((item) => item.status as StatusType);
        const status = [...new Set(statusArr)];

        setStatusList(status);
    };

    const handleSelectFilter = (checked: boolean, value: StatusType) => {
        let updatedFilters: StatusType[] = [...filters];

        if (checked) {
            updatedFilters.push(value);
        } else {
            updatedFilters = updatedFilters.filter(
                (filter) => filter !== value
            );
        }

        setFilters(updatedFilters);
    };

    const filterInvoices = () => {
        if (!filters.length) {
            setInvoicesToRender(invoices);
            return;
        }

        const filteredList = invoices.filter((invoice) => {
            if (filters.includes(invoice.status as StatusType)) {
                return invoice;
            }

            return null;
        });
        setInvoicesToRender(filteredList);
    };

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            const clickOutside = e.target?.nodeName === 'DIV';
            if (clickOutside) {
                setShowFilter(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (invoices?.length) {
            getInvoiceStatus();
        }
    }, [invoices]);

    useEffect(() => {
        filterInvoices();
    }, [filters]);

    return (
        <div className="relative">
            <span className="flex items-baseline mr-8 md:mr-4">
                <button
                    ref={ref}
                    className="mr-3 text-sm font-medium"
                    onClick={() => setShowFilter(!showFilter)}
                >
                    Filter<span className="md:hidden"> by Status</span>
                </button>
                <ArrowDown />
            </span>

            {statusList.length > 0 && (
                <div
                    className={`w-[11.25rem] absolute bottom-0 translate-y-[115%] bg-white p-6 rounded-lg shadow-dropdown z-10 transition-opacity ${
                        showFilter
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    } md:-left-[1rem]`}
                >
                    {statusList.map((status) => (
                        <Checkbox
                            key={status}
                            status={status}
                            onChange={(e: any) =>
                                handleSelectFilter(e.target.checked, status)
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default StatusFilter;
