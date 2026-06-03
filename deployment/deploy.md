# Deployment guide — helo42 (h42)

## Network

**Ethereum Sepolia Testnet**
- Chain ID: 11155111
- RPC URL: `https://ethereum-sepolia-rpc.publicnode.com`
- Explorer: https://sepolia.etherscan.io
- Faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia
---

## Deployed contract

| Field | Value |
|---|---|
| Contract address | `0x73C71902f42D899F510dAbF8a2208c77078eF666` |
| Network | Ethereum Sepolia Testnet |
| Deployer | `0x61fbD316e5d4e60A3cE8212472a0B805E4e0CeD6` |
| Standard | ERC-20 |

Explorer: https://sepolia.etherscan.io/address/0x73C71902f42D899F510dAbF8a2208c77078eF666

---

## How to re-deploy

### 1. Set up your environment

Create a `.env` file at the project root:

```
PRIVATE_KEY=your_private_key_here
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the contract

```bash
npx hardhat compile
```

### 4. Deploy

```bash
npx hardhat run deployment/deploy.ts --network sepolia
```

The script will print the contract address and a direct link to Sepolia Etherscan.

---

## Contract

The compiled contract ABI is generated automatically in `artifacts/code/Helo42.sol/Helo42.json` after running `npx hardhat compile`.
