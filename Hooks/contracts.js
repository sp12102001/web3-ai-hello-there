import { useState, useEffect } from "react";
import { ethers } from "ethers";
import VarietyManagementABI from "../abi/VarietyManagement.json";
import PlantManagementABI from "../abi/PlantManagement.json";
import AgentABI from "../abi/Agent.json";

const VARIETY_MANAGEMENT_ADDRESS = "0xYourVarietyManagementContractAddress";
const PLANT_MANAGEMENT_ADDRESS = "0xYourPlantManagementContractAddress";
const AGENT_ADDRESS = "0xYourAgentContractAddress";

export function useVarietyManagement() {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(
        VARIETY_MANAGEMENT_ADDRESS,
        VarietyManagementABI,
        signer
      );
      setContract(contractInstance);
    }
  }, []);

  return contract;
}

export function usePlantManagement() {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(
        PLANT_MANAGEMENT_ADDRESS,
        PlantManagementABI,
        signer
      );
      setContract(contractInstance);
    }
  }, []);

  return contract;
}

export function useAgent() {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(
        AGENT_ADDRESS,
        AgentABI,
        signer
      );
      setContract(contractInstance);
    }
  }, []);

  return contract;
}
