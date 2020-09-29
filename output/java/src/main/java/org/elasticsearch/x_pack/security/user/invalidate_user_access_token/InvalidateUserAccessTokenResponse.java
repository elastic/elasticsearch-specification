
package org.elasticsearch.x_pack.security.user.invalidate_user_access_token;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class InvalidateUserAccessTokenResponse extends ResponseBase<InvalidateUserAccessTokenResponse> implements XContentable<InvalidateUserAccessTokenResponse> {
  
  static final ParseField ERROR_COUNT = new ParseField("error_count");
  private long _errorCount;
  private boolean _errorCount$isSet;
  public long getErrorCount() { return this._errorCount; }
  public InvalidateUserAccessTokenResponse setErrorCount(long val) {
    this._errorCount = val;
    _errorCount$isSet = true;
    return this;
  }

  static final ParseField ERROR_DETAILS = new ParseField("error_details");
  private List<ErrorCause> _errorDetails;
  public List<ErrorCause> getErrorDetails() { return this._errorDetails; }
  public InvalidateUserAccessTokenResponse setErrorDetails(List<ErrorCause> val) { this._errorDetails = val; return this; }

  static final ParseField INVALIDATED_TOKENS = new ParseField("invalidated_tokens");
  private long _invalidatedTokens;
  private boolean _invalidatedTokens$isSet;
  public long getInvalidatedTokens() { return this._invalidatedTokens; }
  public InvalidateUserAccessTokenResponse setInvalidatedTokens(long val) {
    this._invalidatedTokens = val;
    _invalidatedTokens$isSet = true;
    return this;
  }

  static final ParseField PREVIOUSLY_INVALIDATED_TOKENS = new ParseField("previously_invalidated_tokens");
  private long _previouslyInvalidatedTokens;
  private boolean _previouslyInvalidatedTokens$isSet;
  public long getPreviouslyInvalidatedTokens() { return this._previouslyInvalidatedTokens; }
  public InvalidateUserAccessTokenResponse setPreviouslyInvalidatedTokens(long val) {
    this._previouslyInvalidatedTokens = val;
    _previouslyInvalidatedTokens$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_errorCount$isSet) {
      builder.field(ERROR_COUNT.getPreferredName(), _errorCount);
    }
    if (_errorDetails != null) {
      builder.array(ERROR_DETAILS.getPreferredName(), _errorDetails);
    }
    if (_invalidatedTokens$isSet) {
      builder.field(INVALIDATED_TOKENS.getPreferredName(), _invalidatedTokens);
    }
    if (_previouslyInvalidatedTokens$isSet) {
      builder.field(PREVIOUSLY_INVALIDATED_TOKENS.getPreferredName(), _previouslyInvalidatedTokens);
    }
  }

  @Override
  public InvalidateUserAccessTokenResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return InvalidateUserAccessTokenResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<InvalidateUserAccessTokenResponse, Void> PARSER =
    new ObjectParser<>(InvalidateUserAccessTokenResponse.class.getName(), false, InvalidateUserAccessTokenResponse::new);

  static {
    PARSER.declareLong(InvalidateUserAccessTokenResponse::setErrorCount, ERROR_COUNT);
    PARSER.declareObjectArray(InvalidateUserAccessTokenResponse::setErrorDetails, (p, t) -> ErrorCause.PARSER.apply(p, t), ERROR_DETAILS);
    PARSER.declareLong(InvalidateUserAccessTokenResponse::setInvalidatedTokens, INVALIDATED_TOKENS);
    PARSER.declareLong(InvalidateUserAccessTokenResponse::setPreviouslyInvalidatedTokens, PREVIOUSLY_INVALIDATED_TOKENS);
  }

}
