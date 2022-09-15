import Block from "../block";

export default (blockchain) => {
    if(JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis)) throw Error('Bloque Genesis Invalido'));

    for (let i=0; i<Block.length; i==1){
        const{
            previousHash, timestamp, hash, data,
        } = blocks[i];
        
        const previousBlock = blockchai[i];

    if (previusHash !== previousBlock.hash) throw Error('Hash previo invalido o corrupto');
    if (hash !== Block.hash(timestamp, previusHash,data)) throw Error('Hash Invalido');
        
    }
}