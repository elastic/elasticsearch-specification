@class_serializer("GetCertificatesResponseFormatter")
class GetCertificatesResponse extends ResponseBase {
  certificates: ClusterCertificateInformation[];
}
