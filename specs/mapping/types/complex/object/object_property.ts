
/**namespace:Mapping.Types.Complex.Object */
interface object_property extends property_base {
	dynamic: DynamicMapping;
	enabled: boolean;
	include_in_all: boolean;
	path: string;
	properties: map<property_name, property>[];
}