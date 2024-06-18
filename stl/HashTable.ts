interface HashTable {
    [key: string]: number
}

let walletSimple: HashTable = {}
walletSimple["BTC"]=33
console.log(walletSimple["BTC"])

interface HashTableGeneric<T> {
    [key: string]: T;
}

let wallet: HashTableGeneric<number> = {};
wallet["BTC"] = 0.03
wallet["ETH"] = 0.01
console.log(wallet["BTC"])

type HashTableFullGeneric<T extends string | number | symbol, S> = {
    [key in T]: S;
};

let genericWallet: HashTableFullGeneric<string, string> = {}
genericWallet["hot wallet"] = "ALS$K31FJO291-!!2923"
genericWallet["cold wallet"] = "089GJ)_(UN8M9U890-@*!"
console.log(genericWallet["hot wallet"])
