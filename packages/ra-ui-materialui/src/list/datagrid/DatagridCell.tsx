import * as React from 'react';
import PropTypes from 'prop-types';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';
import classnames from 'classnames';
import { Record } from 'ra-core';

const DatagridCell = ({
    className,
    field,
    record,
    basePath,
    resource,
    ...rest
}: DatagridCellProps): JSX.Element => (
    <TableCell
        className={classnames(className, field.props.cellClassName)}
        align={field.props.textAlign}
        {...rest}
    >
        {React.cloneElement(field, {
            record,
            basePath: field.props.basePath || basePath,
            resource,
        })}
    </TableCell>
);

DatagridCell.propTypes = {
    className: PropTypes.string,
    field: PropTypes.element,
    record: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    basePath: PropTypes.string,
    resource: PropTypes.string,
};

export interface DatagridCellProps extends TableCellProps {
    className?: string;
    field?: JSX.Element;
    basePath?: string;
    record?: Record;
}

// wat? TypeScript looses the displayName if we don't set it explicitly
DatagridCell.displayName = 'DatagridCell';

export default DatagridCell;
