import type { borrower, GroupCollection } from "../types";

export const FriendList: borrower[] = [
  {
    name: "Ijud",
    amount: 33.75,
  },
  {
    name: "Alif Aiman",
    amount: 43.1,
  },
  {
    name: "Ariff",
    amount: 78.6,
  },
  {
    name: "Harith",
    amount: 0,
  },
];

const friendsSettled: borrower[] = [
  {
    name: "Ijud",
    amount: 0,
  },
  {
    name: "Alif Aiman",
    amount: 0,
  },
  {
    name: "Ariff",
    amount: 0,
  },
  {
    name: "Harith",
    amount: 0,
  },
];

function amountCalc(friends: borrower[]) {
  let amount = 0;
  friends.forEach((individu) => {
    amount += individu.amount;
  });
  return amount;
}

export const groupList: GroupCollection[] = [
  {
    name: "Loy Datang",
    participants: FriendList,
    amount: amountCalc(FriendList),
  },
  {
    name: "Bob Mullet",
    participants: friendsSettled,
    amount: amountCalc(friendsSettled),
  },
  {
    name: "Ke PD ke kita",
    participants: friendsSettled,
    amount: amountCalc(friendsSettled),
  },
];
