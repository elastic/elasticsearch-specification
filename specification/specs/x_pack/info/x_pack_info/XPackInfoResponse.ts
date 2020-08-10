class XPackInfoResponse extends ResponseBase {
	build: XPackBuildInformation;
	features: XPackFeatures;
	license: MinimalLicenseInformation;
	tagline: string;
}
