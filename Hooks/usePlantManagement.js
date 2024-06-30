import { useContract } from "wagmi";
import PlantManagement from "../abis/PlantManagement.json";

export function usePlantManagement() {
  return useContract({
    addressOrName: process.env.NEXT_PUBLIC_PLANT_MANAGEMENT_ADDRESS,
    contractInterface: PlantManagement.abi,
  });
}
