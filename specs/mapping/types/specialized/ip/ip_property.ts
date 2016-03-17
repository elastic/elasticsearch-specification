
/**namespace:Mapping.Types.Specialized.Ip */
interface ip_property extends property_base {
	boost: double;
	include_in_all: boolean;
	index: NonStringIndexOption;
	null_value: string;
	precision_step: integer;
}