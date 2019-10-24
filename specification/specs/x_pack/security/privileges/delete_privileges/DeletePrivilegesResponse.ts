class DeletePrivilegesResponse extends DictionaryResponseBase<string, Dictionary<string, FoundUserPrivilege>> {
	applications: Dictionary<string, Dictionary<string, FoundUserPrivilege>>;
}
