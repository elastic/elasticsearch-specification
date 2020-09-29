
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
import org.elasticsearch.query_dsl.full_text.intervals.*;

public class IntervalsContainer  implements XContentable<IntervalsContainer> {
  
  static final ParseField ALL_OF = new ParseField("all_of");
  private IntervalsAllOf _allOf;
  public IntervalsAllOf getAllOf() { return this._allOf; }
  public IntervalsContainer setAllOf(IntervalsAllOf val) { this._allOf = val; return this; }

  static final ParseField ANY_OF = new ParseField("any_of");
  private IntervalsAnyOf _anyOf;
  public IntervalsAnyOf getAnyOf() { return this._anyOf; }
  public IntervalsContainer setAnyOf(IntervalsAnyOf val) { this._anyOf = val; return this; }

  static final ParseField FUZZY = new ParseField("fuzzy");
  private IntervalsFuzzy _fuzzy;
  public IntervalsFuzzy getFuzzy() { return this._fuzzy; }
  public IntervalsContainer setFuzzy(IntervalsFuzzy val) { this._fuzzy = val; return this; }

  static final ParseField MATCH = new ParseField("match");
  private IntervalsMatch _match;
  public IntervalsMatch getMatch() { return this._match; }
  public IntervalsContainer setMatch(IntervalsMatch val) { this._match = val; return this; }

  static final ParseField PREFIX = new ParseField("prefix");
  private IntervalsPrefix _prefix;
  public IntervalsPrefix getPrefix() { return this._prefix; }
  public IntervalsContainer setPrefix(IntervalsPrefix val) { this._prefix = val; return this; }

  static final ParseField WILDCARD = new ParseField("wildcard");
  private IntervalsWildcard _wildcard;
  public IntervalsWildcard getWildcard() { return this._wildcard; }
  public IntervalsContainer setWildcard(IntervalsWildcard val) { this._wildcard = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_allOf != null) {
      builder.field(ALL_OF.getPreferredName());
      _allOf.toXContent(builder, params);
    }
    if (_anyOf != null) {
      builder.field(ANY_OF.getPreferredName());
      _anyOf.toXContent(builder, params);
    }
    if (_fuzzy != null) {
      builder.field(FUZZY.getPreferredName());
      _fuzzy.toXContent(builder, params);
    }
    if (_match != null) {
      builder.field(MATCH.getPreferredName());
      _match.toXContent(builder, params);
    }
    if (_prefix != null) {
      builder.field(PREFIX.getPreferredName());
      _prefix.toXContent(builder, params);
    }
    if (_wildcard != null) {
      builder.field(WILDCARD.getPreferredName());
      _wildcard.toXContent(builder, params);
    }
  }

  @Override
  public IntervalsContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsContainer, Void> PARSER =
    new ObjectParser<>(IntervalsContainer.class.getName(), false, IntervalsContainer::new);

  static {
    PARSER.declareObject(IntervalsContainer::setAllOf, (p, t) -> IntervalsAllOf.PARSER.apply(p, t), ALL_OF);
    PARSER.declareObject(IntervalsContainer::setAnyOf, (p, t) -> IntervalsAnyOf.PARSER.apply(p, t), ANY_OF);
    PARSER.declareObject(IntervalsContainer::setFuzzy, (p, t) -> IntervalsFuzzy.PARSER.apply(p, t), FUZZY);
    PARSER.declareObject(IntervalsContainer::setMatch, (p, t) -> IntervalsMatch.PARSER.apply(p, t), MATCH);
    PARSER.declareObject(IntervalsContainer::setPrefix, (p, t) -> IntervalsPrefix.PARSER.apply(p, t), PREFIX);
    PARSER.declareObject(IntervalsContainer::setWildcard, (p, t) -> IntervalsWildcard.PARSER.apply(p, t), WILDCARD);
  }

}
