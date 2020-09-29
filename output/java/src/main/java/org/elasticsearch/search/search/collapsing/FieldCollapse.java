
package org.elasticsearch.search.search.collapsing;

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
import org.elasticsearch.search.search.inner_hits.*;

public class FieldCollapse  implements XContentable<FieldCollapse> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public FieldCollapse setField(String val) { this._field = val; return this; }

  static final ParseField INNER_HITS = new ParseField("inner_hits");
  private Union2<InnerHits, List<InnerHits>> _innerHits;
  public Union2<InnerHits, List<InnerHits>> getInnerHits() { return this._innerHits; }
  public FieldCollapse setInnerHits(Union2<InnerHits, List<InnerHits>> val) { this._innerHits = val; return this; }

  static final ParseField MAX_CONCURRENT_GROUP_SEARCHES = new ParseField("max_concurrent_group_searches");
  private int _maxConcurrentGroupSearches;
  private boolean _maxConcurrentGroupSearches$isSet;
  public int getMaxConcurrentGroupSearches() { return this._maxConcurrentGroupSearches; }
  public FieldCollapse setMaxConcurrentGroupSearches(int val) {
    this._maxConcurrentGroupSearches = val;
    _maxConcurrentGroupSearches$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_innerHits != null) {
      builder.field(INNER_HITS.getPreferredName());
      _innerHits.toXContent(builder, params);
    }
    if (_maxConcurrentGroupSearches$isSet) {
      builder.field(MAX_CONCURRENT_GROUP_SEARCHES.getPreferredName(), _maxConcurrentGroupSearches);
    }
  }

  @Override
  public FieldCollapse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldCollapse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldCollapse, Void> PARSER =
    new ObjectParser<>(FieldCollapse.class.getName(), false, FieldCollapse::new);

  static {
    PARSER.declareString(FieldCollapse::setField, FIELD);
    PARSER.declareObject(FieldCollapse::setInnerHits, (p, t) ->  new Union2<InnerHits, List<InnerHits>>(), INNER_HITS);
    PARSER.declareInt(FieldCollapse::setMaxConcurrentGroupSearches, MAX_CONCURRENT_GROUP_SEARCHES);
  }

}
