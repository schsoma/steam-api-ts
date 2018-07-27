import {
  SteamAPIEndpoint,
  SteamResponse,
  SteamParameter,
  SteamCommunicator
} from '../utilities/Definitions'
/**
 * Base module for SteamAPI Interfaces
 * Let's clarify: ISteamXYInterface is not a classic interface!
 * They divided the API's functionalties into several topics and named them: ISteam...Interface.
 * To avoid confusion, I would call these 'SteamXYInterfaces' as 'SteamAPIModules'.
 *
 * This Base module is abstract, to keep and use the power of OO and inheritance
 */
abstract class CoreSteamAPIModule {
  // TODO array of SteamAPIEndpoint
  readonly name: string = ''
  readonly baseURL: string = ''

  constructor(protected readonly steamAPIKey: string, baseURL?: string, name?: string) {
    if (baseURL !== undefined) {
      this.baseURL = baseURL
    }
    if (name !== undefined) {
      this.name = name
    }
  }

  getAPIKeyParam(): SteamParameter {
    let keyParam: SteamParameter = { name: 'apiKey', value: this.steamAPIKey }
    return keyParam // TODO: nicer solution for this?
  }
}

/**
 *  This could be the consumable part of the module.
 *  let userId = xy;
 *  let steamUserModule = new SteamUserAPIModule ();
 *  let response = steamUserModule.GetPlayerSummaries(userId);
 */
export default class SteamUserAPIModule extends CoreSteamAPIModule {
  name = 'ISteamUser'
  baseURL = '//api.steampowered.com/'

  GetPlayerSummaries(steamId: number): SteamResponse {
    let endpoint = new SteamAPIEndpoint(this.baseURL, 'GetPlayerSummaries', 'v2', [
      this.getAPIKeyParam(),
      { name: 'steamId', value: steamId }
    ])
    let result = SteamCommunicator.GetAsync(endpoint)
    return result
  }
  /* TODO: endpoints of ISteamUserInterface
  GetFriendList: SteamAPIEndpoint;
  GetPlayerBans: SteamAPIEndpoint;
  GetUserGroup: SteamAPIEndpoint;
  ResolveVanityUrl: SteamAPIEndpoint;
  GetCommunityProfile: SteamAPIEndpoint;  // from "steamcommunity.com/profiles/{0}?xml=1" TODO: need to deserialize XML
*/
}
