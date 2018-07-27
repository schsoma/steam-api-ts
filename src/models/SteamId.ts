import {
  SteamAccountType,
  SteamUniverse,
  SteamInstance,
  SteamIdResolvedFrom
} from '../utilities/EnumTypes'

export class SteamId {
  accountType: SteamAccountType
  readonly universe: SteamUniverse
  readonly platform: SteamInstance
  readonly resolvedFrom: SteamIdResolvedFrom
  readonly accountId: number

  /**
   * @summary Constructs a Steam Id from the four components.
   *
   * @param universe Which Steam system this Steam Id belongs to (such as Public)
   * @param accountType The type of account for this Steam Id (such as Individual)
   * @param accountId The 32-bit account identifier for the Steam account
   * @param instance Not really sure. It seems to mostly be "1".
   */
  constructor(
    universe: SteamUniverse,
    accountType: SteamAccountType,
    accountId: number,
    platform: SteamInstance
  ) {
    this.universe = universe
    this.accountType = accountType
    this.accountId = accountId
    this.platform = platform
    this.resolvedFrom = SteamIdResolvedFrom.IndividualComponents
  }

  // TODO: More constructor options are available. #needToThink.
  // See: https://github.com/babelshift/SteamWebAPI2/blob/master/src/SteamWebAPI2/Models/SteamId.cs
}
