@rest_spec_name("indices.put_settings")
@class_serializer("IndexSettingsConverter")
class UpdateIndexSettingsRequest {
	index_settings: Dictionary<string, any>[];
	index: Indices;
}
