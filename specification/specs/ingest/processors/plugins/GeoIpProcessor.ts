class GeoIpProcessor extends ProcessorBase {
	database_file: string;
	field: Field;
	first_only: boolean;
	ignore_missing: boolean;
	properties: string[];
	target_field: Field;
}
