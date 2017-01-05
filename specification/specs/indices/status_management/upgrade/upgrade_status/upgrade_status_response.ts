
/**namespace:Indices.StatusManagement.Upgrade.UpgradeStatus */
/**custom_serialization*/
interface upgrade_status_response extends response {
	/**custom_serialization */
	Upgrades: map<string, upgrade_status>[];
	SizeInBytes: long;
	SizeToUpgradeInBytes: string;
	SizeToUpgradeAncientInBytes: string;
}