
package org.elasticsearch.x_pack.machine_learning.validate_detector;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.machine_learning.job.detectors.*;

public class ValidateDetectorRequest  implements XContentable<ValidateDetectorRequest> {
  
  static final ParseField DETECTOR = new ParseField("detector");
  private Detector _detector;
  public Detector getDetector() { return this._detector; }
  public ValidateDetectorRequest setDetector(Detector val) { this._detector = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_detector != null) {
      builder.field(DETECTOR.getPreferredName());
      _detector.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ValidateDetectorRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ValidateDetectorRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ValidateDetectorRequest, Void> PARSER =
    new ObjectParser<>(ValidateDetectorRequest.class.getName(), false, ValidateDetectorRequest::new);

  static {
    PARSER.declareObject(ValidateDetectorRequest::setDetector, (p, t) -> Detector.PARSER.apply(p, t), DETECTOR);
  }

}
