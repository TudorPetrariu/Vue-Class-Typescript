export type Transaction = {
  __typename?: "Transaction";
  amount?: number | null;
  forgottenProperty?: string;
  companyId: string | null;
  exDate?: Date | null;
  fromSecurityHolder?: string | null;
  fromSecurityHolderId?: string | null;
  notes?: string | null;
  positionWithinDay: number | null;
  pricePerShare?: number | null;
  recordDate: string | null;
  securityClass?: object | null;
  securityClassId: string | null;
  splitFactor?: number | null;
  state: string | null;
  toSecurityHolder?: any | null;
  toSecurityHolderId?: string | null;
  transactionIdentifier: string | null;
  type: string;
};

export type TableData = {
  id: string;
  name: string;
  nominalValue: number;
  authorizedAmount: number;
  issuedAmount: number;
  authorizedCapital: number;
  issuedCapital: number;
  randomNumber?: number;
};
