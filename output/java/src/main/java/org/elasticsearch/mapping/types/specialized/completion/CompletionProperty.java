
package org.elasticsearch.mapping.types.specialized.completion;

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
import org.elasticsearch.mapping.types.specialized.completion.*;
import org.elasticsearch.internal.*;

public class CompletionProperty  implements XContentable<CompletionProperty> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public CompletionProperty setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField CONTEXTS = new ParseField("contexts");
  private List<SuggestContext> _contexts;
  public List<SuggestContext> getContexts() { return this._contexts; }
  public CompletionProperty setContexts(List<SuggestContext> val) { this._contexts = val; return this; }


  static final ParseField MAX_INPUT_LENGTH = new ParseField("max_input_length");
  private Integer _maxInputLength;
  public Integer getMaxInputLength() { return this._maxInputLength; }
  public CompletionProperty setMaxInputLength(Integer val) { this._maxInputLength = val; return this; }


  static final ParseField PRESERVE_POSITION_INCREMENTS = new ParseField("preserve_position_increments");
  private Boolean _preservePositionIncrements;
  public Boolean getPreservePositionIncrements() { return this._preservePositionIncrements; }
  public CompletionProperty setPreservePositionIncrements(Boolean val) { this._preservePositionIncrements = val; return this; }


  static final ParseField PRESERVE_SEPARATORS = new ParseField("preserve_separators");
  private Boolean _preserveSeparators;
  public Boolean getPreserveSeparators() { return this._preserveSeparators; }
  public CompletionProperty setPreserveSeparators(Boolean val) { this._preserveSeparators = val; return this; }


  static final ParseField SEARCH_ANALYZER = new ParseField("search_analyzer");
  private String _searchAnalyzer;
  public String getSearchAnalyzer() { return this._searchAnalyzer; }
  public CompletionProperty setSearchAnalyzer(String val) { this._searchAnalyzer = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_contexts != null) {
      builder.array(CONTEXTS.getPreferredName(), _contexts);
    }
    if (_maxInputLength != null) {
      builder.field(MAX_INPUT_LENGTH.getPreferredName(), _maxInputLength);
    }
    if (_preservePositionIncrements != null) {
      builder.field(PRESERVE_POSITION_INCREMENTS.getPreferredName(), _preservePositionIncrements);
    }
    if (_preserveSeparators != null) {
      builder.field(PRESERVE_SEPARATORS.getPreferredName(), _preserveSeparators);
    }
    if (_searchAnalyzer != null) {
      builder.field(SEARCH_ANALYZER.getPreferredName(), _searchAnalyzer);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CompletionProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CompletionProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CompletionProperty, Void> PARSER =
    new ObjectParser<>(CompletionProperty.class.getName(), false, CompletionProperty::new);

  static {
    PARSER.declareString(CompletionProperty::setAnalyzer, ANALYZER);
    PARSER.declareObjectArray(CompletionProperty::setContexts, (p, t) -> SuggestContext.PARSER.apply(p, t), CONTEXTS);
    PARSER.declareInt(CompletionProperty::setMaxInputLength, MAX_INPUT_LENGTH);
    PARSER.declareBoolean(CompletionProperty::setPreservePositionIncrements, PRESERVE_POSITION_INCREMENTS);
    PARSER.declareBoolean(CompletionProperty::setPreserveSeparators, PRESERVE_SEPARATORS);
    PARSER.declareString(CompletionProperty::setSearchAnalyzer, SEARCH_ANALYZER);
  }

}
