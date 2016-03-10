
/**namespace:Indices.StatusManagement.Upgrade.UpgradeStatus */
/**custom_serialization*/
interface UpgradeStatusResponse extends Response {
	/**custom_serialization */
	Upgrades: Map<string, UpgradeStatus>;
	SizeInBytes: long;
	SizeToUpgradeInBytes: string;
	SizeToUpgradeAncientInBytes: string;
}