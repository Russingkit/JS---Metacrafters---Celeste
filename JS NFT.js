let NFTCollection = [];
let transactionCounter = 1; // To simulate transaction IDs

function mintNFT(name, artist, description, yearCreated, location) {
    // Create an NFT object with the metadata and transaction ID
    let nft = {
        transactionID: transactionCounter++, // Assign a unique transaction ID
        name: name,
        artist: artist,
        description: description,
        yearCreated: yearCreated,
        location: location
    };
    
    NFTCollection.push(nft);
    console.log(`Minted NFT: ${name}, Transaction ID: ${nft.transactionID}`);
}

function listNFTs() {
    NFTCollection.forEach((nft, index) => {
        console.log('\n');
        console.log(`NFT #${index + 1}`);
        console.log(`Transaction ID: ${nft.transactionID}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Artist: ${nft.artist}`);
        console.log(`Description: ${nft.description}`);
        console.log(`Year Created: ${nft.yearCreated}`);
        console.log(`Location: ${nft.location}`);
        console.log('---------------------------');
    });
}

function getTotalSupply() {
    console.log(`Total NFTs minted: ${NFTCollection.length}`);
}

// Function to locate NFT by transaction ID
function findNFTByTransactionID(id) {
    let nft = NFTCollection.find(nft => nft.transactionID === id);
    
    if (nft) {
        console.log('\n');
        console.log(`Transaction ID: ${nft.transactionID}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Artist: ${nft.artist}`);
        console.log(`Description: ${nft.description}`);
        console.log(`Year Created: ${nft.yearCreated}`);
        console.log(`Location: ${nft.location}`);
        console.log('---------------------------');
    } else {
        console.log(`NFT with Transaction ID ${id} not found.`);
    }
}

// Mint some NFTs
mintNFT("Bangus Festival", "Belen", "A Bangus Festival held in the City Dagupan to celebrate their culture.", 2023, "Pangasinan");
mintNFT("Pinoy Rap", "Shanti Dope", "A hit collections of Filipino Rapper.", 2022 , "Manila");
mintNFT("Fireworks", "Russel", "A colorful and outstanding play to light up the sky.", 2024 ,"Bolinao");

// List of NFT's
listNFTs();
// Display Total of Supply
getTotalSupply();

// Search for NFT by Transaction ID
findNFTByTransactionID(3); // Search for the NFT with your preferable Transaction ID
