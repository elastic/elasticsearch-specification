
package org.elasticsearch.analysis.token_filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.token_filters.*;

public class UniqueTokenFilter extends TokenFilterBase implements XContentable<UniqueTokenFilter> {
  
  static final ParseField ONLY_ON_SAME_POSITION = new ParseField("only_on_same_position");
  private Boolean _onlyOnSamePosition;
  public Boolean getOnlyOnSamePosition() { return this._onlyOnSamePosition; }
  public UniqueTokenFilter setOnlyOnSamePosition(Boolean val) { this._onlyOnSamePosition = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_onlyOnSamePosition != null) {
      builder.field(ONLY_ON_SAME_POSITION.getPreferredName(), _onlyOnSamePosition);
    }
  }

  @Override
  public UniqueTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UniqueTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UniqueTokenFilter, Void> PARSER =
    new ObjectParser<>(UniqueTokenFilter.class.getName(), false, UniqueTokenFilter::new);

  static {
    PARSER.declareBoolean(UniqueTokenFilter::setOnlyOnSamePosition, ONLY_ON_SAME_POSITION);
  }

}
