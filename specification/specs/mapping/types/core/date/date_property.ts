
/**namespace:Mapping.Types.Core.Date */
interface date_property {
	index: NonStringIndexOption;
	boost: double;
	null_value: Date;
	include_in_all: boolean;
	precision_step: integer;
	ignore_malformed: boolean;
	format: string;
	numeric_resolution: NumericResolutionUnit;
	fielddata: numeric_fielddata;
}