@rest_spec_name("xpack.ml.validate_detector")
@class_serializer("ValidateDetectorRequestConverter")
class ValidateDetectorRequest extends RequestBase {
	detector: Detector;
}
