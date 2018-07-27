/**
 * Common function prototype used by the endpoints.
 * @note I dont want to see api keys running all around the source except in the CoreSteamAPIModule
 * @param parametes stands for any other additional parameters
 */
export class SteamAPIEndpoint {
  constructor(
    baseURL: string,
    name: string,
    version: string,
    parameters?: Array<SteamParameter> | SteamParameter
  ) {
    // empty // TODO: why is this marked as warning?
  }
}

/**
 * It's basically a name-value pair, but with additional information
 */
export interface SteamParameter {
  name: string
  value: any
  description?: string
  isOptional?: boolean
}

/**
 * This is the interface which will be refactored many more times...
 */
export class SteamResponse {}

/**
 * More clever libs call this SteamAPIClient...
 */
export class SteamCommunicator {
  static GetAsync(endpoint: SteamAPIEndpoint): SteamResponse {
    // TODO implement some async call here
    return new SteamResponse()
  }

  static PostAsync(endpoint: SteamAPIEndpoint): SteamResponse {
    // TODO implement some async call here
    return new SteamResponse()
  }
}
