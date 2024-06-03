import DataTable from 'react-data-table-component';
import Delete from '@/shared/assets/icons/delete.svg';
import Sucssed from '@/shared/assets/icons/sucssed.svg';
import Notexist from '@/shared/assets/icons/notexist.svg';
import cls from './TableResult.module.scss';

interface TableResultProps {
    data: any;
    density?: boolean;
}

interface TableCel {
    name: string;
    cell: (row: any) => JSX.Element;
    selector: any;
    width: string;
}

export const TableResult = ({ data, density = false }: TableResultProps) => {
    const startColumns = [
        {
            name: '#',
            selector: (row: any) => row.id,
            width: '40px',
        },
        {
            name: 'Keyword',
            selector: (row: any) => row.keyword,
            width: '226px',

            style: {
                justifyContent: 'flex-start',
            },
        },
        {
            name: 'Frequency',
            selector: (row: any) => row.frequency,
            width: '117px',
        },
    ];
    if (density) {
        startColumns.push({
            name: 'Density',
            selector: (row: any) => row.density,
            width: '90px',
        });
    }
    const cenColums: any = [
        {
            name: 'Title',
            cell: (row: any) =>
                row.title ? (
                    <Sucssed width={14} height={14} />
                ) : (
                    <Notexist width={12} height={12} />
                ),
            width: '65px',
        },
        {
            name: 'Description',
            cell: (row: any) =>
                row.description ? (
                    <Sucssed width={14} height={14} />
                ) : (
                    <Notexist width={12} height={12} />
                ),
            width: '120px',
        },
    ];
    if (!density) {
        cenColums.push({
            name: '<H*>',
            selector: (row: any) => row.h,
            width: '90px',
        });
    }
    const firstCel = startColumns.concat(cenColums as any);
    const endColums = [
        {
            name: 'Delete',
            cell: (row: any) => (
                <Delete width={30} onClick={(e) => console.log(row)} />
            ),
            allowOverflow: true,
            button: true,
            width: '56px',
        },
    ];

    const columns = firstCel.concat(endColums as any);

    const customStyles = {
        headRow: {
            style: {
                minHeight: '40px',
                fontSize: '14px',
                fontWeight: '600',
                background: 'rgba(73, 73, 73, 0.1)',
                color: '#494949',
            },
        },
        rows: {
            style: {
                background: '#FBFBFB',
                height: '40px',
                minHeight: '40px', // override the row height
                color: '#494949',
            },
        },
        headCells: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };
    return (
        <div className={`${cls.tableWraper} ${cls.smalTable}`}>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
                onColumnOrderChange={(cols) => console.log(cols)}
            />
        </div>
    );
};
