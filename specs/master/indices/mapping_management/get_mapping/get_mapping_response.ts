
/**namespace:Indices.MappingManagement.GetMapping */
interface GetMappingResponse extends Response {
	IsValid: boolean;
	Mappings: Map<string, TypeMapping[]>;
	Mapping: TypeMapping;
}