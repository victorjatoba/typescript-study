interface HashTable<T> {
    [key: string]: T;
}

let wallet: HashTable<number> = {};
wallet["BTC"] = 0.03
wallet["ETH"] = 0.01
console.log(wallet["BTC"])

interface HashTableNumber<T> {
    [key: number]: T;
}

let walletByValue: HashTableNumber<string> = {}
walletByValue[0.03] = "BTC"
walletByValue[0.01] = "ETH"
console.log(walletByValue[0.03])

type HashTableGeneric<T extends string | number | symbol, S> = {
    [key in T]: S;
};

let genericWallet: HashTableGeneric<string, string> = {}
genericWallet["hot wallet"] = "ALS$K31FJO291-!!2923"
genericWallet["cold wallet"] = "089GJ)_(UN8M9U890-@*!"
console.log(genericWallet["hot wallet"])