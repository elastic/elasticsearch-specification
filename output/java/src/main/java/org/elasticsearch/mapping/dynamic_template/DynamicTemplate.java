
package org.elasticsearch.mapping.dynamic_template;

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
import org.elasticsearch.mapping.types.*;
import org.elasticsearch.mapping.dynamic_template.*;

public class DynamicTemplate  implements XContentable<DynamicTemplate> {
  
  static final ParseField MAPPING = new ParseField("mapping");
  private IProperty _mapping;
  public IProperty getMapping() { return this._mapping; }
  public DynamicTemplate setMapping(IProperty val) { this._mapping = val; return this; }


  static final ParseField MATCH = new ParseField("match");
  private String _match;
  public String getMatch() { return this._match; }
  public DynamicTemplate setMatch(String val) { this._match = val; return this; }


  static final ParseField MATCH_MAPPING_TYPE = new ParseField("match_mapping_type");
  private String _matchMappingType;
  public String getMatchMappingType() { return this._matchMappingType; }
  public DynamicTemplate setMatchMappingType(String val) { this._matchMappingType = val; return this; }


  static final ParseField MATCH_PATTERN = new ParseField("match_pattern");
  private MatchType _matchPattern;
  public MatchType getMatchPattern() { return this._matchPattern; }
  public DynamicTemplate setMatchPattern(MatchType val) { this._matchPattern = val; return this; }


  static final ParseField PATH_MATCH = new ParseField("path_match");
  private String _pathMatch;
  public String getPathMatch() { return this._pathMatch; }
  public DynamicTemplate setPathMatch(String val) { this._pathMatch = val; return this; }


  static final ParseField PATH_UNMATCH = new ParseField("path_unmatch");
  private String _pathUnmatch;
  public String getPathUnmatch() { return this._pathUnmatch; }
  public DynamicTemplate setPathUnmatch(String val) { this._pathUnmatch = val; return this; }


  static final ParseField UNMATCH = new ParseField("unmatch");
  private String _unmatch;
  public String getUnmatch() { return this._unmatch; }
  public DynamicTemplate setUnmatch(String val) { this._unmatch = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_mapping != null) {
      builder.field(MAPPING.getPreferredName());
      _mapping.toXContent(builder, params);
    }
    if (_match != null) {
      builder.field(MATCH.getPreferredName(), _match);
    }
    if (_matchMappingType != null) {
      builder.field(MATCH_MAPPING_TYPE.getPreferredName(), _matchMappingType);
    }
    if (_matchPattern != null) {
      builder.field(MATCH_PATTERN.getPreferredName());
      _matchPattern.toXContent(builder, params);
    }
    if (_pathMatch != null) {
      builder.field(PATH_MATCH.getPreferredName(), _pathMatch);
    }
    if (_pathUnmatch != null) {
      builder.field(PATH_UNMATCH.getPreferredName(), _pathUnmatch);
    }
    if (_unmatch != null) {
      builder.field(UNMATCH.getPreferredName(), _unmatch);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DynamicTemplate fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DynamicTemplate.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DynamicTemplate, Void> PARSER =
    new ObjectParser<>(DynamicTemplate.class.getName(), false, DynamicTemplate::new);

  static {
    PARSER.declareObject(DynamicTemplate::setMapping, (p, t) -> IProperty.PARSER.apply(p, t), MAPPING);
    PARSER.declareString(DynamicTemplate::setMatch, MATCH);
    PARSER.declareString(DynamicTemplate::setMatchMappingType, MATCH_MAPPING_TYPE);
    PARSER.declareField(DynamicTemplate::setMatchPattern, (p, t) -> MatchType.PARSER.apply(p), MATCH_PATTERN, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(DynamicTemplate::setPathMatch, PATH_MATCH);
    PARSER.declareString(DynamicTemplate::setPathUnmatch, PATH_UNMATCH);
    PARSER.declareString(DynamicTemplate::setUnmatch, UNMATCH);
  }

}
