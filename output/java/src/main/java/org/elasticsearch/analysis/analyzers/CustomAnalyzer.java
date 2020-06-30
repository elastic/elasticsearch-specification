
package org.elasticsearch.analysis.analyzers;

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

public class CustomAnalyzer  implements XContentable<CustomAnalyzer> {
  
  static final ParseField CHAR_FILTER = new ParseField("char_filter");
  private List<String> _charFilter;
  public List<String> getCharFilter() { return this._charFilter; }
  public CustomAnalyzer setCharFilter(List<String> val) { this._charFilter = val; return this; }


  static final ParseField FILTER = new ParseField("filter");
  private List<String> _filter;
  public List<String> getFilter() { return this._filter; }
  public CustomAnalyzer setFilter(List<String> val) { this._filter = val; return this; }


  static final ParseField POSITION_OFFSET_GAP = new ParseField("position_offset_gap");
  private Integer _positionOffsetGap;
  public Integer getPositionOffsetGap() { return this._positionOffsetGap; }
  public CustomAnalyzer setPositionOffsetGap(Integer val) { this._positionOffsetGap = val; return this; }


  static final ParseField POSITION_INCREMENT_GAP = new ParseField("position_increment_gap");
  private Integer _positionIncrementGap;
  public Integer getPositionIncrementGap() { return this._positionIncrementGap; }
  public CustomAnalyzer setPositionIncrementGap(Integer val) { this._positionIncrementGap = val; return this; }


  static final ParseField TOKENIZER = new ParseField("tokenizer");
  private String _tokenizer;
  public String getTokenizer() { return this._tokenizer; }
  public CustomAnalyzer setTokenizer(String val) { this._tokenizer = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_charFilter != null) {
      builder.array(CHAR_FILTER.getPreferredName(), _charFilter);
    }
    if (_filter != null) {
      builder.array(FILTER.getPreferredName(), _filter);
    }
    if (_positionOffsetGap != null) {
      builder.field(POSITION_OFFSET_GAP.getPreferredName(), _positionOffsetGap);
    }
    if (_positionIncrementGap != null) {
      builder.field(POSITION_INCREMENT_GAP.getPreferredName(), _positionIncrementGap);
    }
    if (_tokenizer != null) {
      builder.field(TOKENIZER.getPreferredName(), _tokenizer);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CustomAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CustomAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CustomAnalyzer, Void> PARSER =
    new ObjectParser<>(CustomAnalyzer.class.getName(), false, CustomAnalyzer::new);

  static {
    PARSER.declareStringArray(CustomAnalyzer::setCharFilter, CHAR_FILTER);
    PARSER.declareStringArray(CustomAnalyzer::setFilter, FILTER);
    PARSER.declareInt(CustomAnalyzer::setPositionOffsetGap, POSITION_OFFSET_GAP);
    PARSER.declareInt(CustomAnalyzer::setPositionIncrementGap, POSITION_INCREMENT_GAP);
    PARSER.declareString(CustomAnalyzer::setTokenizer, TOKENIZER);
  }

}
