@rest_spec_name('ml.set_upgrade_mode')
class SetUpgradeModeRequest extends RequestBase {
  query_parameters?: {
    enabled?: boolean
    timeout?: Time
  }
  body?: {}
}
