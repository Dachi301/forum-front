interface Column {
  heading: string;
  value: string;
}

interface DataItem {
  [key: string]: any;
}

interface TableProps {
  data: DataItem[];
  column: Column[];
}

interface TableHeadItemProps {
  item: Column;
}

interface TableRowProps {
  item: DataItem;
  column: Column[];
}
