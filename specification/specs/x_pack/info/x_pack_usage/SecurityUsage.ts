class SecurityUsage extends XPackUsage {
  anonymous: SecurityFeatureToggle
  audit: AuditUsage
  ipfilter: IpFilterUsage
  realms: Dictionary<string, RealmUsage>
  role_mapping: Dictionary<string, RoleMappingUsage>
  roles: Dictionary<string, RoleUsage>
  ssl: SslUsage
  system_key: SecurityFeatureToggle
}
