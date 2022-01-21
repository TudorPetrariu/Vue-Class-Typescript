

import { TableData } from "../src/types/types"
export const totalAmount = (tableData: TableData[] = [], unit: string): number => {
  if (!tableData.length) return
  return tableData
    .map((data) => data[unit])
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}


