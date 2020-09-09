class UserAgentProcessor extends ProcessorBase {
  field: Field;
  ignore_missing: boolean;
  options: UserAgentProperty[];
  regex_file: string;
  target_field: Field;
}
