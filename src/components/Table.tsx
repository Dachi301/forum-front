import React from "react";

function Table({ data, column }: TableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-[#f48023]">
          <tr>
            {column.map((item, index) => (
              <TableHeadItem key={index} item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} item={item} column={column} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHeadItem({ item }: TableHeadItemProps) {
  return <th className="px-6 py-3">{item.heading}</th>;
}

function TableRow({ item, column }: TableRowProps) {
  return (
    <tr className="odd:bg-white even:bg-gray-50 border-b">
      {column.map((columnItem, index) => {
        if (columnItem.value.includes(".")) {
          const itemSplit = columnItem.value.split("."); // ['address', 'city']
          return (
            <td key={index} className="px-6 py-4">
              {item[itemSplit[0]][itemSplit[1]]}
            </td>
          );
        }
        return (
          <td key={index} className="px-6 py-4">
            {item[columnItem.value]}
          </td>
        );
      })}
    </tr>
  );
}

export default Table;
