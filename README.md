# NFT Collection Minting

This project is a simple NFT (Non-Fungible Token) minting system using JavaScript. It allows the creation, listing, and searching of NFTs, providing a basic foundation for exploring NFT-related concepts.

## Overview

This code defines a system for minting NFTs with key attributes like the name, artist, description, year created, and location. Each minted NFT is given a unique transaction ID, and the collection can be listed, searched, and queried for total supply.

### Features:

- **Mint NFTs**: Create NFTs with custom metadata (name, artist, description, year, location).
- **List NFTs**: Display all NFTs minted so far.
- **Search by Transaction ID**: Find a specific NFT using its transaction ID.
- **Get Total Supply**: View the total number of NFTs minted.

## Code Breakdown

### Variables:
- **NFTCollection**: An array to store all minted NFTs.
- **transactionCounter**: A counter to assign unique transaction IDs to each NFT.

### Functions:

- **mintNFT(name, artist, description, yearCreated, location)**:
  - Mints a new NFT with the provided details and assigns it a unique transaction ID.
  - Stores the NFT in the `NFTCollection`.
  
- **listNFTs()**:
  - Displays all NFTs in the collection, with detailed metadata.

- **getTotalSupply()**:
  - Shows the total number of NFTs minted.

- **findNFTByTransactionID(id)**:
  - Finds and displays an NFT based on its transaction ID. If the ID is not found, it alerts the user.

### Example Usage:

1. **Minting an NFT**:
   ```javascript
   mintNFT("Bangus Festival", "Belen", "A Bangus Festival held in the City of Dagupan to celebrate their culture.", 2023, "Pangasinan");
   ```

2. **Listing All NFTs**:
   ```javascript
   listNFTs();
   ```

3. **Checking Total Supply**:
   ```javascript
   getTotalSupply();
   ```

4. **Finding an NFT by Transaction ID**:
   ```javascript
   findNFTByTransactionID(1);
   ```

## Getting Started

### Prerequisites
- Basic knowledge of JavaScript and programming logic.
- A code editor like VS Code or a JavaScript runtime like Node.js to run and test the code.

### Installation

1. Clone or download this repository to your local machine.
2. Open the https://github.com/Russingkit/JS---Metacrafters---Celeste/blob/main/JS%20NFT.js (or equivalent) file and execute the JavaScript code using your preferred runtime.

### Example Run

```javascript
// Mint some NFTs
mintNFT("Bangus Festival", "Belen", "A Bangus Festival held in the City of Dagupan to celebrate their culture.", 2023, "Pangasinan");
mintNFT("Pinoy Rap", "Shanti Dope", "A hit collection of Filipino Rapper.", 2022 , "Manila");
mintNFT("Fireworks", "Russel", "A colorful and outstanding play to light up the sky.", 2024 ,"Bolinao");

// List all NFTs
listNFTs();

// Get total NFT supply
getTotalSupply();

// Find an NFT by Transaction ID
findNFTByTransactionID(3);
```

## Authors

- **Curt Russel M. Celeste**  
  [@Curt Russel Celeste](https://www.facebook.com/profile.php?id=100069766380432)

## License

This project is licensed under the Curt Russel M. Celeste.
