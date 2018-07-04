class SecurityUsage extends XPackUsage {
	system_key: SecurityFeatureToggle;
	anonymous: SecurityFeatureToggle;
	ssl: SslUsage;
	ipfilter: IpFilterUsage;
	audit: AuditUsage;
	roles: Dictionary<string, RoleUsage>;
	realms: Dictionary<string, RealmUsage>;
}
