# helo42 (h42) — Documentation

## What is helo42?

`helo42` (ticker: h42) is a fungible digital token deployed on the Ethereum Sepolia Testnet.

The h42 token respects the ERC-20 standard.

---

## Token properties

| Property | Value |
|---|---|
| Name | helo42 |
| Ticker | h42 |
| Total supply | 1,000,000 h42 |
| Decimals | 18 |
| Standard | ERC-20 |
| Network | Ethereum Sepolia Testnet |
| Contract address | `0x73C71902f42D899F510dAbF8a2208c77078eF666` |

---

## How ERC-20 tokens work

An ERC-20 token is a smart contract deployed on the Ethereum blockchain. The contract stores a balance mapping (address → amount) and exposes a standard set of functions.

### Standard functions

| Function | Description |
|---|---|
| `totalSupply()` | Returns the total token supply |
| `balanceOf(address)` | Returns the token balance of an address |
| `transfer(to, amount)` | Transfers tokens to another address |
| `approve(spender, amount)` | Allows a third party to spend tokens on your behalf |
| `transferFrom(from, to, amount)` | Transfers tokens on behalf of another address (requires prior approval) |

### Token lifecycle

```
1. Contract deployed  →  1,000,000 h42 minted to the deployer
2. Deployer transfers →  send h42 to any Ethereum address
3. Anyone can transfer →  standard ERC-20 transfer
```

---

## Smart contract

The contract is written in Solidity and uses [OpenZeppelin](https://openzeppelin.com/contracts/) — the industry standard for secure, audited token contracts.

```solidity
contract Helo42 is ERC20, Ownable {
    uint256 public constant INITIAL_SUPPLY = 1_000_000 * 10 ** 18;

    constructor(address initialOwner)
        ERC20("helo42", "h42")
        Ownable(initialOwner)
    {
        _mint(initialOwner, INITIAL_SUPPLY);
    }
}
```

- **ERC20** — provides the standard token logic (balances, transfers, approvals)
- **Ownable** — provides ownership management (the deployer is the initial owner)
- The full supply is minted once at deployment to the deployer's address

---

## Security considerations

### Ownership

The deployer is set as the initial owner via `Ownable`. Ownership can be:
- **Transferred** to another address: `transferOwnership(newOwner)`
- **Renounced** permanently: `renounceOwnership()` — no one will own the contract

### No minting after deployment

The contract does not expose a `mint` function after construction. The supply is fixed at 1,000,000 h42 — no one can create more tokens.

### OpenZeppelin audited code

The ERC20 and Ownable implementations come from OpenZeppelin's audited library, reducing the risk of vulnerabilities in the core token logic.

### Private key security

The deployer's private key must be kept secret. It is stored in `.env` which is excluded from git via `.gitignore`. Anyone with the private key controls the owner account.

---

## How to use h42

### Prerequisites

- MetaMask (or any Ethereum wallet)
- Switch MetaMask to **Sepolia Testnet**
- Some Sepolia ETH for gas (free at https://faucet.chainstack.com)

### Add h42 to MetaMask

1. Open MetaMask → **Import token**
2. Paste the contract address: `0x73C71902f42D899F510dAbF8a2208c77078eF666`
3. Token symbol (`h42`) and decimals (`18`) fill in automatically
4. Click **Add custom token**

### Transfer h42

Once imported, use MetaMask's **Send** button or interact with the contract directly on Sepolia Etherscan using the **Write Contract** tab.

---

## Explorer

- Contract: https://sepolia.etherscan.io/address/0x73C71902f42D899F510dAbF8a2208c77078eF666
