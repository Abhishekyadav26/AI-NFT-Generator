import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { client } from "./client";
import { AiGenerator } from "./components/AiGenerator";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection:"column",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
    }}>
      <h1 >AI NFT Generator</h1>
      <ConnectEmbed 
      client={client}
      />
      <AiGenerator />
    </div>   
  );
}
