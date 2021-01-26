@rest_spec_name('watcher.execute_watch')
class ExecuteWatchRequest extends RequestBase {
  path_parts?: {
    id?: Name
  }
  query_parameters?: {
    debug?: boolean
  }
  body?: {
    action_modes?: Dictionary<string, ActionExecutionMode>
    alternative_input?: Dictionary<string, UserDefinedValue>
    ignore_condition?: boolean
    record_execution?: boolean
    simulated_actions?: SimulatedActions
    trigger_data?: ScheduleTriggerEvent
    watch?: Watch
  }
}
