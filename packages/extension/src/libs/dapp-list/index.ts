import { NetworkNames } from "@enkryptcom/types";

const lists: Partial<Record<NetworkNames, string>> = {
  [NetworkNames.Ethereum]:
    "https://raw.githubusercontent.com/Mycelium-Lab/bdns-wallet/transaction/packages/extension/src/libs/dapp-list/dapps/eth.json",
};

export default lists;
