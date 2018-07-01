class XPackInfoResponse extends ResponseBase {
	build: XPackBuildInformation;
	license: MinimalLicenseInformation;
	features: XPackFeatures;
	tagline: string;
}
