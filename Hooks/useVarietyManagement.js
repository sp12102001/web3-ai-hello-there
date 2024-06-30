import { useContract } from "wagmi";
import VarietyManagement from "../abis/VarietyManagement.json";

export function useVarietyManagement() {
  return useContract({
    addressOrName: process.env.NEXT_PUBLIC_VARIETY_MANAGEMENT_ADDRESS,
    contractInterface: VarietyManagement.abi,
  });
}
