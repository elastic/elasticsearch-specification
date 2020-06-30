
package org.elasticsearch.search.suggesters.phrase_suggester;

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
import org.elasticsearch.search.suggesters.phrase_suggester.*;

public class PhraseSuggestCollate  implements XContentable<PhraseSuggestCollate> {
  
  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, Object> _params;
  public NamedContainer<String, Object> getParams() { return this._params; }
  public PhraseSuggestCollate setParams(NamedContainer<String, Object> val) { this._params = val; return this; }


  static final ParseField PRUNE = new ParseField("prune");
  private Boolean _prune;
  public Boolean getPrune() { return this._prune; }
  public PhraseSuggestCollate setPrune(Boolean val) { this._prune = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private PhraseSuggestCollateQuery _query;
  public PhraseSuggestCollateQuery getQuery() { return this._query; }
  public PhraseSuggestCollate setQuery(PhraseSuggestCollateQuery val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_params != null) {
      builder.field(PARAMS.getPreferredName());
      _params.toXContent(builder, params);
    }
    if (_prune != null) {
      builder.field(PRUNE.getPreferredName(), _prune);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PhraseSuggestCollate fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PhraseSuggestCollate.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PhraseSuggestCollate, Void> PARSER =
    new ObjectParser<>(PhraseSuggestCollate.class.getName(), false, PhraseSuggestCollate::new);

  static {
    PARSER.declareObject(PhraseSuggestCollate::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PARAMS);
    PARSER.declareBoolean(PhraseSuggestCollate::setPrune, PRUNE);
    PARSER.declareObject(PhraseSuggestCollate::setQuery, (p, t) -> PhraseSuggestCollateQuery.PARSER.apply(p, t), QUERY);
  }

}
