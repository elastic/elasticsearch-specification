
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_status_response extends response {
	/**custom_serialization */
	Indices: map<string, recovery_status>[];
}