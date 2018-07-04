@class_serializer("CatFielddataRecordJsonConverter")
class CatFielddataRecord implements ICatRecord {
	id: string;
	host: string;
	ip: string;
	node: string;
	field: string;
	size: string;
}
