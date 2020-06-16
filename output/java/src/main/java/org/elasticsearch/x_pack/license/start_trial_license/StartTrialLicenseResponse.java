
package org.elasticsearch.x_pack.license.start_trial_license;

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


public class StartTrialLicenseResponse  implements XContentable<StartTrialLicenseResponse> {
  
  static final ParseField ERROR_MESSAGE = new ParseField("error_message");
  private String _errorMessage;
  public String getErrorMessage() { return this._errorMessage; }
  public StartTrialLicenseResponse setErrorMessage(String val) { this._errorMessage = val; return this; }


  static final ParseField TRIAL_WAS_STARTED = new ParseField("trial_was_started");
  private Boolean _trialWasStarted;
  public Boolean getTrialWasStarted() { return this._trialWasStarted; }
  public StartTrialLicenseResponse setTrialWasStarted(Boolean val) { this._trialWasStarted = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_errorMessage != null) {
      builder.field(ERROR_MESSAGE.getPreferredName(), _errorMessage);
    }
    if (_trialWasStarted != null) {
      builder.field(TRIAL_WAS_STARTED.getPreferredName(), _trialWasStarted);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StartTrialLicenseResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartTrialLicenseResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartTrialLicenseResponse, Void> PARSER =
    new ObjectParser<>(StartTrialLicenseResponse.class.getName(), false, StartTrialLicenseResponse::new);

  static {
    PARSER.declareString(StartTrialLicenseResponse::setErrorMessage, ERROR_MESSAGE);
    PARSER.declareBoolean(StartTrialLicenseResponse::setTrialWasStarted, TRIAL_WAS_STARTED);
  }

}
