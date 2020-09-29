
package org.elasticsearch.analysis.token_filters.synonym;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.token_filters.synonym.*;
import org.elasticsearch.analysis.token_filters.*;

public class SynonymGraphTokenFilter extends TokenFilterBase implements XContentable<SynonymGraphTokenFilter> {
  
  static final ParseField EXPAND = new ParseField("expand");
  private Boolean _expand;
  public Boolean getExpand() { return this._expand; }
  public SynonymGraphTokenFilter setExpand(Boolean val) { this._expand = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private SynonymFormat _format;
  public SynonymFormat getFormat() { return this._format; }
  public SynonymGraphTokenFilter setFormat(SynonymFormat val) { this._format = val; return this; }

  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public SynonymGraphTokenFilter setLenient(Boolean val) { this._lenient = val; return this; }

  static final ParseField SYNONYMS = new ParseField("synonyms");
  private List<String> _synonyms;
  public List<String> getSynonyms() { return this._synonyms; }
  public SynonymGraphTokenFilter setSynonyms(List<String> val) { this._synonyms = val; return this; }

  static final ParseField SYNONYMS_PATH = new ParseField("synonyms_path");
  private String _synonymsPath;
  public String getSynonymsPath() { return this._synonymsPath; }
  public SynonymGraphTokenFilter setSynonymsPath(String val) { this._synonymsPath = val; return this; }

  static final ParseField TOKENIZER = new ParseField("tokenizer");
  private String _tokenizer;
  public String getTokenizer() { return this._tokenizer; }
  public SynonymGraphTokenFilter setTokenizer(String val) { this._tokenizer = val; return this; }

  static final ParseField UPDATEABLE = new ParseField("updateable");
  private Boolean _updateable;
  public Boolean getUpdateable() { return this._updateable; }
  public SynonymGraphTokenFilter setUpdateable(Boolean val) { this._updateable = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_expand != null) {
      builder.field(EXPAND.getPreferredName(), _expand);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName());
      _format.toXContent(builder, params);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_synonyms != null) {
      builder.array(SYNONYMS.getPreferredName(), _synonyms);
    }
    if (_synonymsPath != null) {
      builder.field(SYNONYMS_PATH.getPreferredName(), _synonymsPath);
    }
    if (_tokenizer != null) {
      builder.field(TOKENIZER.getPreferredName(), _tokenizer);
    }
    if (_updateable != null) {
      builder.field(UPDATEABLE.getPreferredName(), _updateable);
    }
  }

  @Override
  public SynonymGraphTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SynonymGraphTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SynonymGraphTokenFilter, Void> PARSER =
    new ObjectParser<>(SynonymGraphTokenFilter.class.getName(), false, SynonymGraphTokenFilter::new);

  static {
    PARSER.declareBoolean(SynonymGraphTokenFilter::setExpand, EXPAND);
    PARSER.declareField(SynonymGraphTokenFilter::setFormat, (p, t) -> SynonymFormat.PARSER.apply(p), FORMAT, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(SynonymGraphTokenFilter::setLenient, LENIENT);
    PARSER.declareStringArray(SynonymGraphTokenFilter::setSynonyms, SYNONYMS);
    PARSER.declareString(SynonymGraphTokenFilter::setSynonymsPath, SYNONYMS_PATH);
    PARSER.declareString(SynonymGraphTokenFilter::setTokenizer, TOKENIZER);
    PARSER.declareBoolean(SynonymGraphTokenFilter::setUpdateable, UPDATEABLE);
  }

}
