export enum SteamUniverse {
  Invalid = 0,
  Public,
  Beta,
  Internal,
  Dev
}

export enum SteamAccountType {
  Invalid = 0,
  Individual = 1,
  Multiseat = 2,
  GameServer = 3,
  AnonGameServer = 4,
  Pending = 5,
  ContentServer = 6,
  Clan = 7,
  Chat = 8,
  Chat_Clan = 8,
  Chat_Lobby = 8,
  P2P_SuperSeeder = 9,
  AnonUser = 10
}

export enum SteamInstance {
  All = 0,
  Desktop = 1,
  Console = 2,
  Web = 4
}

export enum SteamIdResolvedFrom {
  IndividualComponents = 0,
  SteamCommunityUri,
  SteamCommunityProfileName,
  SteamId64,
  AccountIdApproximation,
  LegacySteamId,
  ModernSteamId
}
