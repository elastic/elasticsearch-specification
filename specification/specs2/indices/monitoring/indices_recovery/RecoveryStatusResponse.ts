class RecoveryStatusResponse extends DictionaryResponseBase<IndexName, RecoveryStatus> {
	indices: Map<IndexName, RecoveryStatus>;
}
