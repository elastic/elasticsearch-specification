class IndicesPrivileges {
	@prop_serializer("IndicesJsonConverter")
	names: Indices;
	privileges: string[];
	field_security: FieldSecurity;
	query: QueryContainer;
}
