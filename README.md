# helo42 (h42)

A BEP-20 / ERC-20 fungible token deployed on **Ethereum Sepolia Testnet**, built as part of the 42 school Tokenizer project.

The project is written in Typescript and the contract is written in Solidity because it is the native langage of Ethereum contracts.

---

## Blockchain platform: Ethereum (Sepolia Testnet)

**Why Ethereum?**

- **ERC-20 standard** — the most widely adopted token standard, with a massive ecosystem of tools, wallets, and documentation.
- **Smart contract based** — the token logic lives in a Solidity contract, making ownership and supply fully auditable on-chain.
- **Sepolia Testnet** — the official Ethereum testnet, with no real money involved and free ETH available via faucets.
- **Hardhat** — industry-standard development framework with TypeScript support, matching the project stack.

---

## Token details

| Field | Value |
|---|---|
| Name | helo42 |
| Ticker | h42 |
| Total supply | 1,000,000 h42 |
| Decimals | 18 |
| Standard | ERC-20 |
| Network | Ethereum Sepolia Testnet |
| Contract address | `0x73C71902f42D899F510dAbF8a2208c77078eF666` |

Verify on the explorer:
- [Contract on Sepolia Etherscan](https://sepolia.etherscan.io/address/0x73C71902f42D899F510dAbF8a2208c77078eF666)

---

## Repository structure

```
.
├── README.md
├── code/
│   ├── Helo42.sol     # ERC-20 smart contract (Solidity)
├── deployment/
│   ├── deploy.ts      # Hardhat deployment script
│   └── deploy.md      # Step-by-step deployment guide
├── documentation/
│   ├── en.subject.pdf  # Project subject
│   └── whitepaper.md   # Token documentation and usage guide
└── hardhat.config.ts   # Hardhat configuration (Sepolia)
```

---

## How to run

### Prerequisites

- Node.js ≥ 18
- A `.env` file at the project root:

```
PRIVATE_KEY=your_wallet_private_key
```

### Install dependencies

```bash
npm install
```

### Compile the contract

```bash
npx hardhat compile
```

### Deploy on Sepolia

```bash
npx hardhat run deployment/deploy.ts --network sepolia
```
