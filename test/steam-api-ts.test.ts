import DummyClass from '../src/steam-api-ts'
import SteamUserAPIModule from '../src/models/ModulDefinitions'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })
})

/**
 * SteamUserAPIModule Test
 */
describe('SteamUserAPIModule', () => {
  let testAPIkey = 'test_API_key'
  let userModule = new SteamUserAPIModule(testAPIkey)
  let testUserId = 121212

  it('SteamUserAPIModule is instantiable', () => {
    expect(userModule).toBeInstanceOf(SteamUserAPIModule)
  })

  it('getAPIKeyParam is result a correct SteamParameter', () => {
    let keyParam = userModule.getAPIKeyParam()
    expect(keyParam.name).toBe('apiKey')
    expect(keyParam.value).toBe('test_API_key')
  })
  /*
  if("GetPlayerSummaries can return an (empty) SteamResponse.", () => {
    let result = userModule.GetPlayerSummaries (testUserId);
    expect(result).toBeInstanceOf();
  })
  */
})
