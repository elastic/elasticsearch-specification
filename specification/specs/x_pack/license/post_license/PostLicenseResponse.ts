class PostLicenseResponse extends ResponseBase {
	acknowledge: LicenseAcknowledgement;
	acknowledged: boolean;
	license_status: LicenseStatus;
}
