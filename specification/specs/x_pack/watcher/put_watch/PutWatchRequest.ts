@rest_spec_name("watcher.put_watch")
class PutWatchRequest extends RequestBase {
  query_parameters: {
    active: boolean;
    if_primary_term: long;
    if_sequence_number: long;
    version: long;
  }
  body: {
    actions: Dictionary<string, Action>;
    condition: ConditionContainer;
    input: InputContainer;
    metadata: Dictionary<string, any>;
    throttle_period: string;
    transform: TransformContainer;
    trigger: TriggerContainer;
  }
}
