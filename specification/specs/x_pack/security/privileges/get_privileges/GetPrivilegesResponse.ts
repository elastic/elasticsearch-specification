class GetPrivilegesResponse extends DictionaryResponseBase<string, Dictionary<string, PrivilegesActions>> {
	applications: Dictionary<string, Dictionary<string, PrivilegesActions>>;
}
