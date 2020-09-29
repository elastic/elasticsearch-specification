
package org.elasticsearch.x_pack.enrich;

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

public class EnrichPolicy  implements XContentable<EnrichPolicy> {
  
  static final ParseField ENRICH_FIELDS = new ParseField("enrich_fields");
  private List<String> _enrichFields;
  public List<String> getEnrichFields() { return this._enrichFields; }
  public EnrichPolicy setEnrichFields(List<String> val) { this._enrichFields = val; return this; }

  static final ParseField INDICES = new ParseField("indices");
  private Indices _indices;
  public Indices getIndices() { return this._indices; }
  public EnrichPolicy setIndices(Indices val) { this._indices = val; return this; }

  static final ParseField MATCH_FIELD = new ParseField("match_field");
  private String _matchField;
  public String getMatchField() { return this._matchField; }
  public EnrichPolicy setMatchField(String val) { this._matchField = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public EnrichPolicy setQuery(String val) { this._query = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_enrichFields != null) {
      builder.array(ENRICH_FIELDS.getPreferredName(), _enrichFields);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_matchField != null) {
      builder.field(MATCH_FIELD.getPreferredName(), _matchField);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
  }

  @Override
  public EnrichPolicy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EnrichPolicy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EnrichPolicy, Void> PARSER =
    new ObjectParser<>(EnrichPolicy.class.getName(), false, EnrichPolicy::new);

  static {
    PARSER.declareStringArray(EnrichPolicy::setEnrichFields, ENRICH_FIELDS);
    PARSER.declareObject(EnrichPolicy::setIndices, (p, t) -> Indices.createFrom(p), INDICES);
    PARSER.declareString(EnrichPolicy::setMatchField, MATCH_FIELD);
    PARSER.declareString(EnrichPolicy::setQuery, QUERY);
  }

}
