class XPackInfoResponse extends ResponseBase implements IResponse {
	build: XPackBuildInformation;
	features: XPackFeatures;
	license: MinimalLicenseInformation;
	tagline: string;
}
