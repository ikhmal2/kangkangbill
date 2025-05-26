export type borrower = {
  name: string;
  amount: number;
};

export interface GroupCollection {
  name: string;
  participants: borrower[];
  amount: number;
}
