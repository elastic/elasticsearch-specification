
package org.elasticsearch.analysis.tokenizers;

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
import org.elasticsearch.analysis.tokenizers.*;

public class PatternTokenizer extends TokenizerBase implements XContentable<PatternTokenizer> {
  
  static final ParseField FLAGS = new ParseField("flags");
  private String _flags;
  public String getFlags() { return this._flags; }
  public PatternTokenizer setFlags(String val) { this._flags = val; return this; }

  static final ParseField GROUP = new ParseField("group");
  private int _group;
  private boolean _group$isSet;
  public int getGroup() { return this._group; }
  public PatternTokenizer setGroup(int val) {
    this._group = val;
    _group$isSet = true;
    return this;
  }

  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public PatternTokenizer setPattern(String val) { this._pattern = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_flags != null) {
      builder.field(FLAGS.getPreferredName(), _flags);
    }
    if (_group$isSet) {
      builder.field(GROUP.getPreferredName(), _group);
    }
    if (_pattern != null) {
      builder.field(PATTERN.getPreferredName(), _pattern);
    }
  }

  @Override
  public PatternTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PatternTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PatternTokenizer, Void> PARSER =
    new ObjectParser<>(PatternTokenizer.class.getName(), false, PatternTokenizer::new);

  static {
    PARSER.declareString(PatternTokenizer::setFlags, FLAGS);
    PARSER.declareInt(PatternTokenizer::setGroup, GROUP);
    PARSER.declareString(PatternTokenizer::setPattern, PATTERN);
  }

}
