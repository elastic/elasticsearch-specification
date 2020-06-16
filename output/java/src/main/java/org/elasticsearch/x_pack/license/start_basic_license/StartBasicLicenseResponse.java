
package org.elasticsearch.x_pack.license.start_basic_license;

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


public class StartBasicLicenseResponse  implements XContentable<StartBasicLicenseResponse> {
  
  static final ParseField ACKNOWLEDGE = new ParseField("acknowledge");
  private NamedContainer<String, List<String>> _acknowledge;
  public NamedContainer<String, List<String>> getAcknowledge() { return this._acknowledge; }
  public StartBasicLicenseResponse setAcknowledge(NamedContainer<String, List<String>> val) { this._acknowledge = val; return this; }


  static final ParseField BASIC_WAS_STARTED = new ParseField("basic_was_started");
  private Boolean _basicWasStarted;
  public Boolean getBasicWasStarted() { return this._basicWasStarted; }
  public StartBasicLicenseResponse setBasicWasStarted(Boolean val) { this._basicWasStarted = val; return this; }


  static final ParseField ERROR_MESSAGE = new ParseField("error_message");
  private String _errorMessage;
  public String getErrorMessage() { return this._errorMessage; }
  public StartBasicLicenseResponse setErrorMessage(String val) { this._errorMessage = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_acknowledge != null) {
      builder.field(ACKNOWLEDGE.getPreferredName());
      _acknowledge.toXContent(builder, params);
    }
    if (_basicWasStarted != null) {
      builder.field(BASIC_WAS_STARTED.getPreferredName(), _basicWasStarted);
    }
    if (_errorMessage != null) {
      builder.field(ERROR_MESSAGE.getPreferredName(), _errorMessage);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StartBasicLicenseResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartBasicLicenseResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartBasicLicenseResponse, Void> PARSER =
    new ObjectParser<>(StartBasicLicenseResponse.class.getName(), false, StartBasicLicenseResponse::new);

  static {
    PARSER.declareObject(StartBasicLicenseResponse::setAcknowledge, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO List<String> */), ACKNOWLEDGE);
    PARSER.declareBoolean(StartBasicLicenseResponse::setBasicWasStarted, BASIC_WAS_STARTED);
    PARSER.declareString(StartBasicLicenseResponse::setErrorMessage, ERROR_MESSAGE);
  }

}
