@class_serializer("UpgradeStatusResponseJsonConverter")
class UpgradeStatusResponse extends ResponseBase {
	upgrades: Dictionary<string, UpgradeStatus>[];
	size_in_bytes: long;
	size_to_upgrade_in_bytes: string;
	size_to_upgrade_ancient_in_bytes: string;
}
