class LicenseInformation {
	status: LicenseStatus;
	uid: string;
	type: LicenseType;
	issue_date: Date;
	issue_date_in_millis: long;
	expiry_date: Date;
	expiry_date_in_millis: long;
	max_nodes: long;
	issued_to: string;
	issuer: string;
}
