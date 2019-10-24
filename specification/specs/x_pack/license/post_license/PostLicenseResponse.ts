class PostLicenseResponse extends ResponseBase implements IResponse {
	acknowledge: LicenseAcknowledgement;
	acknowledged: boolean;
	license_status: LicenseStatus;
}
