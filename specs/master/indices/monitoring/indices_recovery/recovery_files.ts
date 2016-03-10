
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryFiles {
	total: long;
	reused: long;
	recovered: long;
	percent: string;
	details: RecoveryFileDetails[];
}