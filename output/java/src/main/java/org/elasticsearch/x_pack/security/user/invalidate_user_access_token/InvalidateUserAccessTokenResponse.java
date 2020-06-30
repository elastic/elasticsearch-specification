
package org.elasticsearch.x_pack.security.user.invalidate_user_access_token;

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
import org.elasticsearch.internal.*;

public class InvalidateUserAccessTokenResponse  implements XContentable<InvalidateUserAccessTokenResponse> {
  
  static final ParseField INVALIDATED_TOKENS = new ParseField("invalidated_tokens");
  private Long _invalidatedTokens;
  public Long getInvalidatedTokens() { return this._invalidatedTokens; }
  public InvalidateUserAccessTokenResponse setInvalidatedTokens(Long val) { this._invalidatedTokens = val; return this; }


  static final ParseField PREVIOUSLY_INVALIDATED_TOKENS = new ParseField("previously_invalidated_tokens");
  private Long _previouslyInvalidatedTokens;
  public Long getPreviouslyInvalidatedTokens() { return this._previouslyInvalidatedTokens; }
  public InvalidateUserAccessTokenResponse setPreviouslyInvalidatedTokens(Long val) { this._previouslyInvalidatedTokens = val; return this; }


  static final ParseField ERROR_COUNT = new ParseField("error_count");
  private Long _errorCount;
  public Long getErrorCount() { return this._errorCount; }
  public InvalidateUserAccessTokenResponse setErrorCount(Long val) { this._errorCount = val; return this; }


  static final ParseField ERROR_DETAILS = new ParseField("error_details");
  private List<ErrorCause> _errorDetails;
  public List<ErrorCause> getErrorDetails() { return this._errorDetails; }
  public InvalidateUserAccessTokenResponse setErrorDetails(List<ErrorCause> val) { this._errorDetails = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_invalidatedTokens != null) {
      builder.field(INVALIDATED_TOKENS.getPreferredName(), _invalidatedTokens);
    }
    if (_previouslyInvalidatedTokens != null) {
      builder.field(PREVIOUSLY_INVALIDATED_TOKENS.getPreferredName(), _previouslyInvalidatedTokens);
    }
    if (_errorCount != null) {
      builder.field(ERROR_COUNT.getPreferredName(), _errorCount);
    }
    if (_errorDetails != null) {
      builder.array(ERROR_DETAILS.getPreferredName(), _errorDetails);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public InvalidateUserAccessTokenResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return InvalidateUserAccessTokenResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<InvalidateUserAccessTokenResponse, Void> PARSER =
    new ObjectParser<>(InvalidateUserAccessTokenResponse.class.getName(), false, InvalidateUserAccessTokenResponse::new);

  static {
    PARSER.declareLong(InvalidateUserAccessTokenResponse::setInvalidatedTokens, INVALIDATED_TOKENS);
    PARSER.declareLong(InvalidateUserAccessTokenResponse::setPreviouslyInvalidatedTokens, PREVIOUSLY_INVALIDATED_TOKENS);
    PARSER.declareLong(InvalidateUserAccessTokenResponse::setErrorCount, ERROR_COUNT);
    PARSER.declareObjectArray(InvalidateUserAccessTokenResponse::setErrorDetails, (p, t) -> ErrorCause.PARSER.apply(p, t), ERROR_DETAILS);
  }

}
