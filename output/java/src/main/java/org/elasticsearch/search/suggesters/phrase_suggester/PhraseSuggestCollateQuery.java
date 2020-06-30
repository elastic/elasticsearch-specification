
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
import org.elasticsearch.common_abstractions.infer.id.*;

public class PhraseSuggestCollateQuery  implements XContentable<PhraseSuggestCollateQuery> {
  
  static final ParseField ID = new ParseField("id");
  private Id _id;
  public Id getId() { return this._id; }
  public PhraseSuggestCollateQuery setId(Id val) { this._id = val; return this; }


  static final ParseField SOURCE = new ParseField("source");
  private String _source;
  public String getSource() { return this._source; }
  public PhraseSuggestCollateQuery setSource(String val) { this._source = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PhraseSuggestCollateQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PhraseSuggestCollateQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PhraseSuggestCollateQuery, Void> PARSER =
    new ObjectParser<>(PhraseSuggestCollateQuery.class.getName(), false, PhraseSuggestCollateQuery::new);

  static {
    PARSER.declareObject(PhraseSuggestCollateQuery::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareString(PhraseSuggestCollateQuery::setSource, SOURCE);
  }

}
