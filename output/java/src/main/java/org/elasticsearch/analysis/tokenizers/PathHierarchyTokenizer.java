
package org.elasticsearch.analysis.tokenizers;

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

public class PathHierarchyTokenizer  implements XContentable<PathHierarchyTokenizer> {
  
  static final ParseField BUFFER_SIZE = new ParseField("buffer_size");
  private Integer _bufferSize;
  public Integer getBufferSize() { return this._bufferSize; }
  public PathHierarchyTokenizer setBufferSize(Integer val) { this._bufferSize = val; return this; }


  static final ParseField DELIMITER = new ParseField("delimiter");
  private String _delimiter;
  public String getDelimiter() { return this._delimiter; }
  public PathHierarchyTokenizer setDelimiter(String val) { this._delimiter = val; return this; }


  static final ParseField REPLACEMENT = new ParseField("replacement");
  private String _replacement;
  public String getReplacement() { return this._replacement; }
  public PathHierarchyTokenizer setReplacement(String val) { this._replacement = val; return this; }


  static final ParseField REVERSE = new ParseField("reverse");
  private Boolean _reverse;
  public Boolean getReverse() { return this._reverse; }
  public PathHierarchyTokenizer setReverse(Boolean val) { this._reverse = val; return this; }


  static final ParseField SKIP = new ParseField("skip");
  private Integer _skip;
  public Integer getSkip() { return this._skip; }
  public PathHierarchyTokenizer setSkip(Integer val) { this._skip = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bufferSize != null) {
      builder.field(BUFFER_SIZE.getPreferredName(), _bufferSize);
    }
    if (_delimiter != null) {
      builder.field(DELIMITER.getPreferredName(), _delimiter);
    }
    if (_replacement != null) {
      builder.field(REPLACEMENT.getPreferredName(), _replacement);
    }
    if (_reverse != null) {
      builder.field(REVERSE.getPreferredName(), _reverse);
    }
    if (_skip != null) {
      builder.field(SKIP.getPreferredName(), _skip);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PathHierarchyTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PathHierarchyTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PathHierarchyTokenizer, Void> PARSER =
    new ObjectParser<>(PathHierarchyTokenizer.class.getName(), false, PathHierarchyTokenizer::new);

  static {
    PARSER.declareInt(PathHierarchyTokenizer::setBufferSize, BUFFER_SIZE);
    PARSER.declareString(PathHierarchyTokenizer::setDelimiter, DELIMITER);
    PARSER.declareString(PathHierarchyTokenizer::setReplacement, REPLACEMENT);
    PARSER.declareBoolean(PathHierarchyTokenizer::setReverse, REVERSE);
    PARSER.declareInt(PathHierarchyTokenizer::setSkip, SKIP);
  }

}
