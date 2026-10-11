import type { TokenMarketData } from "~/types";
import { env } from "~/env";

export interface TokenMarketDataApiResponse {
  data: TokenMarketData;
}

interface GetTokenMarketParams {
  contractAddress: string;
  tokenId: string;
  chainId?: string;
}

export default async function getTokenMarketData({
  contractAddress,
  tokenId,
  chainId,
}: GetTokenMarketParams) {
  const response = await fetch(
    `${env.NEXT_PUBLIC_MARKETPLACE_API_URL}/tokens/${contractAddress}/${chainId ?? "0x534e5f4d41494e"}/${tokenId}/marketdata`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch tokenMarketData");
  }

  const { data } = (await response.json()) as TokenMarketDataApiResponse;

  return data;
}
