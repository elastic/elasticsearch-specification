
package org.elasticsearch.query_dsl.full_text.intervals;

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
import org.elasticsearch.query_dsl.full_text.intervals.*;

public class IntervalsMatch  implements XContentable<IntervalsMatch> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public IntervalsMatch setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField MAX_GAPS = new ParseField("max_gaps");
  private int _maxGaps;
  private boolean _maxGaps$isSet;
  public int getMaxGaps() { return this._maxGaps; }
  public IntervalsMatch setMaxGaps(int val) {
    this._maxGaps = val;
    _maxGaps$isSet = true;
    return this;
  }

  static final ParseField ORDERED = new ParseField("ordered");
  private Boolean _ordered;
  public Boolean getOrdered() { return this._ordered; }
  public IntervalsMatch setOrdered(Boolean val) { this._ordered = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public IntervalsMatch setQuery(String val) { this._query = val; return this; }

  static final ParseField USE_FIELD = new ParseField("use_field");
  private String _useField;
  public String getUseField() { return this._useField; }
  public IntervalsMatch setUseField(String val) { this._useField = val; return this; }

  static final ParseField FILTER = new ParseField("filter");
  private IntervalsFilter _filter;
  public IntervalsFilter getFilter() { return this._filter; }
  public IntervalsMatch setFilter(IntervalsFilter val) { this._filter = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_maxGaps$isSet) {
      builder.field(MAX_GAPS.getPreferredName(), _maxGaps);
    }
    if (_ordered != null) {
      builder.field(ORDERED.getPreferredName(), _ordered);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    if (_useField != null) {
      builder.field(USE_FIELD.getPreferredName(), _useField);
    }
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
  }

  @Override
  public IntervalsMatch fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsMatch.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsMatch, Void> PARSER =
    new ObjectParser<>(IntervalsMatch.class.getName(), false, IntervalsMatch::new);

  static {
    PARSER.declareString(IntervalsMatch::setAnalyzer, ANALYZER);
    PARSER.declareInt(IntervalsMatch::setMaxGaps, MAX_GAPS);
    PARSER.declareBoolean(IntervalsMatch::setOrdered, ORDERED);
    PARSER.declareString(IntervalsMatch::setQuery, QUERY);
    PARSER.declareString(IntervalsMatch::setUseField, USE_FIELD);
    PARSER.declareObject(IntervalsMatch::setFilter, (p, t) -> IntervalsFilter.PARSER.apply(p, t), FILTER);
  }

}
