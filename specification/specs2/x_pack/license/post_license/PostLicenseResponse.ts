class PostLicenseResponse extends ResponseBase {
	acknowledged: boolean;
	license_status: LicenseStatus;
	acknowledge: LicenseAcknowledgement;
}
