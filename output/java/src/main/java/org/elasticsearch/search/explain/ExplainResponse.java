
package org.elasticsearch.search.explain;

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
import org.elasticsearch.search.explain.*;

public class ExplainResponse<TDocument>  implements XContentable<ExplainResponse<TDocument>> {
  
  static final ParseField EXPLANATION = new ParseField("explanation");
  private ExplanationDetail _explanation;
  public ExplanationDetail getExplanation() { return this._explanation; }
  public ExplainResponse<TDocument> setExplanation(ExplanationDetail val) { this._explanation = val; return this; }


  static final ParseField GET = new ParseField("get");
  private InlineGet<TDocument> _get;
  public InlineGet<TDocument> getGet() { return this._get; }
  public ExplainResponse<TDocument> setGet(InlineGet<TDocument> val) { this._get = val; return this; }


  static final ParseField MATCHED = new ParseField("matched");
  private Boolean _matched;
  public Boolean getMatched() { return this._matched; }
  public ExplainResponse<TDocument> setMatched(Boolean val) { this._matched = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_explanation != null) {
      builder.field(EXPLANATION.getPreferredName());
      _explanation.toXContent(builder, params);
    }
    if (_get != null) {
      builder.field(GET.getPreferredName());
      _get.toXContent(builder, params);
    }
    if (_matched != null) {
      builder.field(MATCHED.getPreferredName(), _matched);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExplainResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExplainResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExplainResponse, Void> PARSER =
    new ObjectParser<>(ExplainResponse.class.getName(), false, ExplainResponse::new);

  static {
    PARSER.declareObject(ExplainResponse::setExplanation, (p, t) -> ExplanationDetail.PARSER.apply(p, t), EXPLANATION);
    InlineGet _get = new InlineGet<>();
    PARSER.declareObject(ExplainResponse::setGet, (p, t) -> _get.PARSER.apply(p, t), GET);
    PARSER.declareBoolean(ExplainResponse::setMatched, MATCHED);
  }

}
