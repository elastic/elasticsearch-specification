@class_serializer("GetCertificatesResponseFormatter")
class GetCertificatesResponse extends ResponseBase implements IResponse {
	certificates: ClusterCertificateInformation[];
}
