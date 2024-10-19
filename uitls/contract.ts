import { client } from "@/app/client";
import { defineChain, getContract } from "thirdweb";

const nftcollectionContractAddress = "0xcCDbDCe4432deeB341c937d32DB2F50250B13deF";

export const contract = getContract({
    client: client,
    chain: defineChain(1320),
    address: "nftcollectionContractAddress",
});