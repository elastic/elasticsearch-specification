@rest_spec_name("ml.validate_detector")
@class_serializer("ValidateDetectorRequestFormatter")
class ValidateDetectorRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    detector?: Detector;
  }
}
