class SecurityUsage extends XPackUsage {
	system_key: SecurityFeatureToggle;
	anonymous: SecurityFeatureToggle;
	ssl: SslUsage;
	ipfilter: IpFilterUsage;
	audit: AuditUsage;
	roles: Map<string, RoleUsage>;
	realms: Map<string, RealmUsage>;
}
