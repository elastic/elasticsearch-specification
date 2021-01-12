class AuthenticateResponse extends ResponseBase {
  authentication_realm: RealmInfo;
  email: string;
  full_name: string;
  lookup_realm: RealmInfo;
  metadata: Dictionary<string, UserDefinedValue>;
  roles: string[];
  username: string;
}
