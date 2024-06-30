import { useContract } from 'wagmi';
import plantManagementABI from '../abi/PlantManagement.json';
import varietyManagementABI from '../abi/VarietyManagement.json';

export function usePlantManagement() {
  return useContract({
    addressOrName: process.env.NEXT_PUBLIC_PLANT_MANAGEMENT_ADDRESS,
    contractInterface: plantManagementABI,
  });
}

export function useVarietyManagement() {
  return useContract({
    addressOrName: process.env.NEXT_PUBLIC_VARIETY_MANAGEMENT_ADDRESS,
    contractInterface: varietyManagementABI,
  });
}
