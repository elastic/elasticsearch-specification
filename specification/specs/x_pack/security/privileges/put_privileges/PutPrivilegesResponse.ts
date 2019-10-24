class PutPrivilegesResponse extends DictionaryResponseBase<string, Dictionary<string, PutPrivilegesStatus>> {
	applications: Dictionary<string, Dictionary<string, PutPrivilegesStatus>>;
}
