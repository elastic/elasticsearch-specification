
/**namespace:Indices.MappingManagement.GetMapping */
interface get_mapping_response extends response {
	IsValid: boolean;
	Mappings: map<string, type_mapping[]>[];
	Mapping: type_mapping;
}