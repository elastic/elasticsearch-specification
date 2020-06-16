class IndicesPrivileges {
	field_security: FieldSecurity;
	@prop_serializer("IndicesFormatter")
	names: Indices;
	privileges: string[];
	query: QueryContainer;
}
